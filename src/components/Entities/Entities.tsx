import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos, getPosts } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>


const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
    background: ${Colors.white};
    .iconsSizes{
        width:15px;
    }
    .container{
        #singleBox{
            width:280px;
            min-height: 80px;
            padding: 10px;
            display: grid;
            grid-template-columns: 30% 1fr;
            #left{
                grid-column:1;
                display: flex;
                align-items: center;
                margin: 0 auto;
                img {
                    width: 60px;
                }
            }
            #right{
                grid-column: 2;
                position:relative;
                .title{
                    margin-top: 10px;
                    font-size: ${fontSize[14]};
                    ::first-letter {
                    text-transform: uppercase;
                    }
                }
                .bottomInfo{
                    color:${Colors.lightgray2};
                    font-size: ${fontSize[12]};
                    position: absolute;
                    bottom: 0;
                    left: 90;
                }
            }
        }
    }
`;

const Top = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 10px;
    margin-bottom: 10px;
`;

const LeftTop = styled.div`
    margin-left:20px;
    margin-top:20px;
    grid-column: 1;
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: ${fontSize[18]};
    font-weight: bold;
`;


const RightSide = styled.div`
    grid-column: 2;
    grid-row: 2;
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const Search = styled.div`
    border: 1px solid ${Colors.lightgray2};
    border-radius: 5%;
    padding:7px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    input{
        border:none;
        &:outline{
            outline:none;
        }
        &:focus{
            outline:none;
        }
        font-size: ${fontSize[16]};
    }
`;

const Followed = styled.div`
    display: flex;
    align-items: center;
    padding:5px;
    border-radius: 5%;
    color:${Colors.purple};
    column-gap: 15px;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
`


export const Entities: FC = () => {

    const { usersPhoto, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
    }, [dispatch]);
   

    return (
        <Wrapper>
            <Top>
                <LeftTop>
                    <h1>Entities</h1>
                </LeftTop>

                <RightSide>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                        <img src="./media/icons/search.png" id="search" alt=""/>
                    </Search>

                    <Followed>
                        <img className="iconsSizes" src="./media/icons/ecosystem.png"/>
                        <p>Followed</p>
                        <img src="./media/icons/arrow-down.png" alt="Arrown down icon"/>
                    </Followed>
                </RightSide>
            </Top>

            <Content>
            {usersPost.slice(0,18).map((x:any) => {
                    return(
                        <div className="container">
                            <div id="singleBox">
                                <div id="left">
                                    <img src={usersPhoto[x.userId]?.url} alt="Single entitie image"/>
                                </div>
                                <div id="right">
                                    <p className="title">{x?.title}</p>
                                    <p className="bottomInfo">Caracas 1050, Distrito Capital, Venezuela</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Content>
        </Wrapper>
    );
};