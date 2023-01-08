from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dataclasses import dataclass
from re import search

import os 


@dataclass
class Tracker:
    def __init__(self):
        self.food: int = 0
        self.shop: int = 0
        self.fun:  int = 0
        self.other:  int = 0

        self.running_total: int = 0

    def format(self):
        return {
            'food': f'${round(self.food, 2)}',
            'shopping': f'${round(self.shop, 2)}',
            'fun': f'${round(self.fun, 2)}',
            'other': f'${round(self.other, 2)}',
            'total': f'${round(self.running_total, 2)}'
        }


app = FastAPI()

# Configure CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/process/{filename}')
def process_file(filename: str):
    tracking = Tracker()
    data = None
    count = section = current_total = 0

    path = f'../backend/data/{filename}'
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="File not found")

    with open(path, 'r') as f:
        data = f.readlines()

        for point in data:
            if search(r'•[\w ]+', point):
                count = int(point.split('(')[-1].rstrip().split(')')[0])

            if search(r'- \$[\d.]+', point):
                current_total += float(point.split('$')[1].split(' (')[0])
                tracking.running_total += float(point.split('$')[1].split(' (')[0])

                count -= 1
                if count == 0:
                    if section == 0:
                        tracking.food = current_total
                    elif section == 1:
                        tracking.shop = current_total
                    elif section == 2:
                        tracking.fun = current_total
                    else:
                        tracking.other = current_total

                    section += 1
                    current_total = 0.0

    return tracking.format()
