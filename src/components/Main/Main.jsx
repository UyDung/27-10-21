import Products from '../Products/Products';
import css from './Main.module.css';

const Main = () => {
    return (
        <main className={css.main}>
            <Products />
        </main>
    )
}

export default Main
