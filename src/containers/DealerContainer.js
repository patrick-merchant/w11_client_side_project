import DealershipFilter from "../components/DealershipFilter";
import { useEffect, useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewDealerForm from "../components/NewDealerForm";

const DealerContainer = ({cars}) => {

    // State for dealerships located here for "dealer admin" methods:
    // NEED TO ADD A DEFAULT VALUE
    const [dealerships, setDealerships] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/dealerships")
        .then(response => response.json())
        .then(data => setDealerships(data))
    }, [])


    return (
        <>
        <NewDealerForm dealerships={dealerships} />
        <NewCarForm dealerships={dealerships}/>
        <DealershipFilter dealerships={dealerships} cars={cars} />
        </>
    );
}

export default DealerContainer;