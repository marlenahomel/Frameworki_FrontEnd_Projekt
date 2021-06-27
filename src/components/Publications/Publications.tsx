import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {LatestPublications} from './LatestPublications';
import { Link } from 'react-router-dom';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos, getPosts } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>

const InnerWrapper = styled.div`
    max-width:940px;
    display:grid;
    grid-template-columns:300px 1fr;
    align-items:center;
    box-shadow: 1px 2px 10px ${Colors.boxShadow};
`;

const LeftSide = styled.div`
    width:300px;
    height:340px;
    grid-column:1;
    background-image: url("./media/publication.jpg");
    background-position: center;
    background-size: cover;
    color: ${Colors.white};

    #divBottom{
        font-size:${fontSize[18]};
        margin:250px 0 10px 10px;
        p{
            ::first-letter {
                text-transform: uppercase;
            }
            line-height: 22px;
        }
        #personInfo{
            margin-top:10px;
            font-size:${fontSize[14]};
            display:flex;
            align-items:center;
            .left{
                white-space: nowrap;
            }
            .middle{
                border-radius:50%;
                width:20px;
                margin:0 10px;
            }
            .right{
                white-space: nowrap;
            }
        }
    }
`;

const RightSide = styled.div`
    grid-column:2;
    max-height:400px;
    margin-top:5px;
    margin-left:20px;
    align-items:Center;

    #content{
        overflow-y:scroll;
        max-height: 280px;
    }

    span#title{
        font-size:${fontSize[20]};
    }

    .btn{
        background:none;
        border:none;
        font-size:${fontSize[16]};
        cursor:pointer;
        color:${Colors.black};
        margin-top:8px;
    }
`;


export const Publications: FC = () => {

    const { usersList, usersPhoto, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
    }, [dispatch]);

    return (
        <InnerWrapper>
            <LeftSide>
                {usersPost.slice(0,1).map((x:any) => {
                    return(
                        <div id="divBottom">
                            <p>{x?.title}</p>

                            <div id="personInfo">
                                <span className="left">7 jan. 2020</span>
                                <img className="middle" src={usersPhoto[x.userId]?.url} alt="User portrair"/>
                                <span className="right">{usersList[x.userId]?.name}</span>
                            </div>

                        </div>
                    )
                })}
            </LeftSide>
            <RightSide>
                <span id="title">Latest publications</span>

                <div id="content">
                    <LatestPublications/>
                </div>

                <Link to="/mock"><button type="button" className="btn">See more publications</button></Link>

            </RightSide>
        </InnerWrapper>
    );
};