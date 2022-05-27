import './Grilla.scss'
import { Counter } from '../Counter/Counter';

export const Grilla = () => {
    return (
        <section>
            <div class="parent">
                <div class="div1"> <Counter /> </div>
                <div class="div2"> <Counter /> </div>
                <div class="div3"> <Counter /> </div>
                <div class="div4"> <Counter /> </div>
            </div>
        </section>
    )
}