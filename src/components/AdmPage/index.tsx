import { useState } from "react"
import { AdmForm } from "./AdmForm"

export const AdmComponent = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

return(
    <AdmForm openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen}/>
)
}