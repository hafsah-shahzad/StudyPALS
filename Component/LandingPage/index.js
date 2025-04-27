

function LandingPage() {

    return (
        <div id="MainDiv" style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "red",
            display: "flex"
        }} >
            <div id="Left" style={{
                height: "100vh",
                width: "40vw",
                backgroundColor: "white",
                overflow:"hidden"

            }}>
            <div id="top" style={{
                height:"8vh",width:"38vw",
                backgroundColor:"white",
                justifyContent:"space-between",
                display:"flex",
                alignItems:"center"
            }} >
                <div id="navleft">
                    <a href="#" style={{textDecoration:"none",
                color:"black", marginLeft:"20%"}}>Back</a>
                </div>
                <div id="navright">
                    <a href="#"  style={{
                textDecoration:"none",
                color:"black", marginRight:"10%"
               }}>
                    Home</a>
                    <a href="#"  style={{textDecoration:"none",
                color:"black" , marginRight:"30%"}}>Work</a>
                </div>
            </div>
            <div id="Bottom" style={{
                height:"92vh",
                backgroundColor:"white",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
                }}>
                    <div id="text" style={{width:"70%"}}>
                    <h2>Hello</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, gravida quis ultricies vitae, varius aliquam mauris. Proin sit amet molestie urna, eget porta lacus. Quisque in urna lacus. Class aptent taciti sociosqu ad litora
                         </p>
                         <a href="#"  style={{textDecoration:"none",
                color:"black" }}>Read</a>
                         </div>
                </div>
            </div>
            <div id="Right" style={{
                height: "100vh",
                width: "60vw",
                backgroundColor: "yellew"
            }}>
                <div id="topDiv" style={{
                    height: "50vh",
                    backgroundColor: "purple",
                    display: "flex",
                    border:"4px solid white"

                }}>
                    <div id="topleft" style={{
                        backgroundColor: "gray",
                        width: "50%",
                        border:"4px solid white"

                    }}>
                        <img style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%"
                        }} src="https://images.unsplash.com/photo-1683475962510-cd4e8de64fac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80">

                        </img>
                    </div>
                    <div id="topright" style={{
                        backgroundColor: "lightblue",
                        width: "50%",
                        border:"4px solid white"
                    }}>
                        <img style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%"
                        }} src="https://images.unsplash.com/photo-1683014121668-db007fc22e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=419&q=80">

                        </img>
                    </div>
                </div>
                <div id="BottomDiv" style={{
                    height: "50vh",
                    backgroundColor: "black",
                    display: "flex",
                    border:"4px solid white",
                    borderTop:"none"
                }}>
                    <img style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%"
                    }} src="https://images.unsplash.com/photo-1683806743160-2fc2e159dc66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80">

                    </img>
                </div>
            </div>

        </div>




    );
}
export default LandingPage;