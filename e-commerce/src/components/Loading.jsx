const Loading = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Loading;