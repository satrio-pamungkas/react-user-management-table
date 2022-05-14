import { ButtonComplex } from "../components/Home/ButtonComplex";
import { ButtonSimple } from "../components/Home/ButtonSimple";
import { HeaderCard } from "../components/Home/HeaderCard";
import { Info } from "../components/Home/Info";

export const Home = () => {
    return (
        <div className="text-center justify-center">
            <HeaderCard>
                <div>
                    <ButtonSimple/>
                    <ButtonComplex/>
                </div>
            </HeaderCard>
            <br/>
            <Info/>
        </div>
    );
}