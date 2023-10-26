import { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./preloader.css"

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Proactive, </span>
                <span>  Result-driven, </span>
                <span> Innovative...</span>
            </div>
        </div>
    )
  };

  export default PreLoader;