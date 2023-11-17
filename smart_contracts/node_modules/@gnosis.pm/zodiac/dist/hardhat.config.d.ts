import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-deploy";
import "hardhat-change-network";
import "./src/tasks/singleton-deployment";
import "./src/tasks/deploy-replay";
declare const _default: {
    paths: {
        artifacts: string;
        cache: string;
        deploy: string;
        sources: string;
    };
    solidity: {
        compilers: ({
            version: string;
            settings: {
                optimizer: {
                    enabled: boolean;
                    runs: number;
                };
            };
        } | {
            version: string;
            settings?: undefined;
        })[];
    };
    networks: {
        mainnet: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        gnosis: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        goerli: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        arbitrum: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        optimism: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        polygon: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        mumbai: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        avalanche: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
        bsc: {
            url: string;
            chainId?: number | undefined;
            from?: string | undefined;
            gas?: number | "auto" | undefined;
            gasPrice?: number | "auto" | undefined;
            gasMultiplier?: number | undefined;
            timeout?: number | undefined;
            httpHeaders?: {
                [name: string]: string;
            } | undefined;
            accounts?: import("hardhat/types").HttpNetworkAccountsUserConfig | undefined;
            live?: boolean | undefined;
            saveDeployments?: boolean | undefined;
            tags?: string[] | undefined;
            deploy?: string | string[] | undefined;
            companionNetworks?: {
                [name: string]: string;
            } | undefined;
            verify?: {
                etherscan?: {
                    apiKey?: string | undefined;
                    apiUrl?: string | undefined;
                } | undefined;
            } | undefined;
            zksync?: boolean | undefined;
            autoImpersonate?: boolean | undefined;
        };
    };
    namedAccounts: {
        deployer: number;
    };
    mocha: {
        timeout: number;
    };
    etherscan: {
        apiKey: string | undefined;
    };
};
export default _default;
