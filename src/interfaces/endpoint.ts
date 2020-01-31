interface IEndpointContent{
    path: string,
    method: string,
    handler: Function
}

interface IEndpoint{
    name: string,
    endpoints: IEndpointContent[],
} 

export default IEndpoint