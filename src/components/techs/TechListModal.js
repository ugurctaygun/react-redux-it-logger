import React, {useState,useEffect} from 'react'
import Preloader from '../layout/Preloader'
import TechItem from './TechItem';

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    }

    if(loading) {
        return <Preloader />
    }

    return (
        <div id="tech-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => <TechItem tech={tech} key={tech.id} />) }
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;