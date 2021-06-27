import {FC} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width:220px;
    margin:10px 40px 0 0;
    padding:50px;
    text-align:center;
`;


export const Mock: FC = () => {
    return (
        <Wrapper>
            This site is under construction
        </Wrapper>
    );
};