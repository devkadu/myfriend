import { ContainerSearch } from "./style";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    return (
        <ContainerSearch>
            <BsSearch
            size="1.3em"
            />
            <input type="text" placeholder="Busque, dividas, comprovantes..."/>
        </ContainerSearch>
    );
}

export default Search;