interface MemoryInfo {
    total: number;
    free: number;
    used: number;
}

interface Window {
    electronAPI: {
        getMemory: () => Promise<MemoryInfo>;
    };
}