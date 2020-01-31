interface IEndpointContent{
    path: string,
    method: string
}

interface IEndpoint{
    name: string,
    endpoints: IEndpointContent[]
} 

export default IEndpoint