import { AppShell } from "@mantine/core";
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import Header from "../components/header";

export default function Dashboard() {
    const [file, setFile] = useState<File | null>(null);
    const resetRef = useRef<() => void>(null);
  
    const clearFile = () => {
      setFile(null);
      resetRef.current?.();
    };
    
    return (
        <AppShell header={<Header />}>
            <Group position="center">
                <FileButton resetRef={resetRef} onChange={setFile} accept="txt,json">
                    {(props) => <Button {...props}> Upload File </Button>}
                </FileButton>

                <Button disabled={!file} color="red" onClick={clearFile}> Reset </Button>
            </Group>
        
            {file && (
                <Text size="sm" align="center" mt="sm"> Picked file: {file.name} </Text>
            )}
        </AppShell>
    );
}
