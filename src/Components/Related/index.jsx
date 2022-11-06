import RelatedContainer from "./style"

const Related = (props) => {
    return(
        <RelatedContainer>
            <h2>Related</h2>
            <div className="related">
                {props.relatedProducts}
            </div>
            
        </RelatedContainer>
    )
}

export default Related