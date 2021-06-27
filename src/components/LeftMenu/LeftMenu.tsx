import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>

const InnerWrapper = styled.div`
    border-radius: 10px;
    width: 220px;
    min-height: 240px;
    text-align: center;
    background: ${Colors.white};
`;

const PersonInfo = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;
    #foto{
    padding-top:14px;
    padding-bottom:14px;
    width:100px;
    border-radius: 90px;
    margin:0 auto;
    }
    #name{
    margin-top:10px;
    margin-bottom:10px;
    color:blue;
    font-weight:bold;
    }
    #job{
    color:grey;
    padding-bottom:20px;
    border-bottom:1px solid lightgray;
    }
    a{
        text-decoration: none;
        color: inherit;
      }
`;

const PersonDetails = styled.div`
    display:grid;
    grid-template-columns:20% 60% 20%;
    align-items:center;
    .leftImgs{
        grid-column:1;
        margin-left:14px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .middle{
        grid-column:2;
        text-align:left;
        margin-top:5px;
        margin-bottom:5px;
    }
    .rightImgs{
        grid-column:3;
        border:1px solid black;
        padding:4px;
        border-radius:6px;
        margin-top:5px;
        margin-bottom:5px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

const LeftMenuNav = styled.div`
    width: 220px;
    display:grid;
    grid-template-columns:26% 70%;
    align-items:center;
    margin-top:10px;
    margin-left:5px;
    margin-bottom:10px;
    .imgs{
        grid-column:1;
        margin-left: 9px;
        margin-top:7px;
        margin-bottom:7px;
    }
    .titles{
        grid-column:2;
        margin-top:7px;
        margin-bottom:7px;
    }
    a{
        text-decoration: none;
        color: inherit;
      }
      
`;

export const LeftMenu: FC = () => {
    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper>
            <InnerWrapper>
                <PersonInfo>
                    <img id="foto" src={usersPhoto[0]?.url} alt="user photo" />
                    <span id="name"><Link to="/profile">{usersList[0]?.name}</Link></span>
                    <span id="job">{usersList[0]?.company.name}</span>
                </PersonInfo>
                <PersonDetails>
                    <img className="leftImgs" src="./media/icons/network.png" alt="network"/>
                    <Link to="/mock">
                        <span className="middle">Your network</span>
                    </Link>
                    <img className="rightImgs" src="./media/icons/user-plus.png" alt="userplus" />

                    <img className="leftImgs" src="./media/icons/publications.png" alt="publications" />
                    <Link to="/mock">
                        <span className="middle">Your Publications</span>
                    </Link>
                    <img className="rightImgs" src="./media/icons/plus.png" alt="plus" />
                </PersonDetails>
            </InnerWrapper>

            <LeftMenuNav>
                <img className="imgs" src="./media/icons/publications.png" alt="publications" />
                <Link to="/mock">
                    <span className="titles">Publications</span>
                </Link>
                <img className="imgs" src="./media/icons/ecosystem.png" alt="ecosystem" />
                <Link to="/mock">
                    <span className="titles">Ecosystem</span>
                </Link>

                <img className="imgs" src="./media/icons/entities.png" alt="entities" />
                <Link to="/entities">
                    <span className="titles"><Link to="/entities">Entities</Link></span>
                </Link>
            </LeftMenuNav>


        </Wrapper>

    );
};

export default LeftMenu