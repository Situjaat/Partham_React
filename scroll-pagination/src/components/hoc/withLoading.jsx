// eslint-disable-next-line no-unused-vars
const withLoading = (WrapperComponent) => {
    return function EnhancedComponent({ isLoading, ...props}) {
        if (isLoading) {
            return <p> Loading...</p>
        }
        return <WrapperComponent {...props}/>
    }
         
}

export default withLoading;