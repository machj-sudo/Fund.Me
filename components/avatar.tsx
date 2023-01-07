import { Title, Text } from "@mantine/core";

type AvatarProps = {
    src: string;
    name?: string;
    caption?: string;
}

function Avatar({ src: src_image_url, name, caption }: AvatarProps) {
    return (
        <div className="grid justify-content-center justify-items-center">
            <img
                src={src_image_url}
                className="rounded-full w-80 max-w-80 mb-4 mx-auto"
                alt="Avatar"
            />

            <Title className="text-xl text-blue-500 font-medium leading-tight mb-2"> {name} </Title>
            
            <Text className="text-gray-500"> {caption} </Text>
        </div>
    );
}

export default Avatar;
