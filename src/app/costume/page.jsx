'use client'
import { Container } from "@/components/Container";
import { CostumeSelect } from "@/components/CostumeSelect";
import { Header } from "@/components/Header";

export default function CostumePage () {
    
    return (
        <Container>
            <Header title={'Elige tu Disfraz'} info={'Selecciona un disfraz para aplicarlo a tu imagen'}/>
            <CostumeSelect/>
        </Container>
    )
}