import '../../App.scss';


const BestCaseContent = () => {
    return (
        <>
        <div className= "container best-case orange">
            <div className="text-zone anim">
                <h1 className="thick-outline">BEST CASE SCENARIOS</h1>
                <div className="wheel">
                  <h3 className="wheel-child hidden">placeholder</h3>
                  <h3 className="second  thick-outline wheel-child thick-outline">Looking to <span className="color-text">design</span> and<br></br>
                    <span className="color-text">build out</span> an <span className="color-text">interior space?</span>
                  </h3>
                  <h3 className="third thick-outline wheel-child thick-outline">Have an idea for <br></br>
                    a <span className="color-text">product?</span>
                  </h3>
                  <h3 className="fourth thick-outline wheel-child thick-outline">Need a <span className="color-text">scale model</span> for an<br></br>
                    <span className="color-text">architecture project?</span>
                  </h3>
                  <h3 className="fifth thick-outline wheel-child thick-outline">Want a custom <br></br>
                    piece of <span className="color-text">furniture?</span>
                  </h3>
                  <div className="imgArea side">
                    <img className="product" src="" alt="product photography"/>
                    <img className="product" src="" alt="product photography"/>
                  </div>
                  </div>
            </div>
            
        </div>
        </>
    )
}

export default BestCaseContent;