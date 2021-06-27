import { FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    margin-top:130px;
    width:120px;
    display: flex;
    flex-direction: column;
    ul{
        font-size:15px;
        margin-bottom:10px;
    }
    li{
        margin-top:10px;
        margin-bottom:10px;
`;

export const ExpandedMenu2: FC = () => {

    return (
        <Wrapper>
            <ul>
                <li>All</li>
                <li>Followed</li>
                <li>Not followed </li>
            </ul>
   
        </Wrapper>
    );
};