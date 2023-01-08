import React from "react";
import { AppShell } from "@mantine/core";
import { useState, useRef, useEffect } from 'react';
import { FileButton, Button, Group, Text, Title, Center } from '@mantine/core';
import Header from "../components/header";
import SpendingCard from "../components/spending_card";

type ProcessEndpointType = {
    food: string;
    shopping: string;
    fun: string;
    other: string;
    total: string
}

export default function Dashboard() {
    const [file, setFile] = useState<File | null>(null);
    const [report, setReport] = useState<ProcessEndpointType | null>(null);
    const [fetchError, setFetchError] = useState<boolean>(false);
    const resetRef = useRef<() => void>(null);

    // Fetch the values from the backend
    useEffect(() => {
        async function fetchReport() {
            if (file) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/process/${file.name}`);
                    const json = await res.json();
                    setReport(json);   
                } catch (error) {
                    setFetchError(true);
                }
            }
        }

        fetchReport();

    }, [file])

    // Render Components After A Successful Fetch; Otherwise, Render Failed Indicator
    var MonthlyReport = !fetchError ? (
        <React.Fragment>
            {report?.food && (
                <SpendingCard report={report.food} goal={"$400"} title="Food"/>
            )}
            {report?.shopping && (
                <SpendingCard report={report.shopping} goal={"$250"} title="Shopping"/>
            )}
            {report?.fun && (
                <SpendingCard report={report.fun} goal={"$150"} title="Fun"/>
            )}
            {report?.other && (
                <SpendingCard report={report.other} goal={"$500"} title="Other"/>
            )}
        </React.Fragment>
    ) : <Text> Fetching Failed... Is your backend running? </Text>

    // Reset Page
    const clearFile = () => {
        setFile(null);
        resetRef.current?.();

        setReport(null);
        setFetchError(false);
    };

    return (
        <AppShell header={<Header />}>
            <Group position="center" className="mb-5">
                <Title size={45}> Monthly Financial Report </Title>
            </Group>

            <Group position="center">                
                <FileButton resetRef={resetRef} onChange={setFile} accept="txt">
                    {(props) => <Button {...props}> Upload File </Button>}
                </FileButton>

                <Button disabled={!file} color="red" onClick={clearFile}> Reset </Button>
            </Group>
        
            {file && (
                <Text size="md" align="center" mt="sm" className="mb-5"> Picked file: {file.name} </Text>
            )}

            <Group position="center" spacing="lg">
                { MonthlyReport }
            </Group>
            
            <Center className="mt-5">
                {report?.total && (
                    <SpendingCard report={report.total} goal={"$1300"} title="Total"/>
                )}
            </Center>

        </AppShell>
    );
}
