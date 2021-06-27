import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { fontSize } from '../../styledHelpers/FontSizes';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos, getPosts } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

const InnerWrapper = styled.div`
    margin-top:8px;
    margin-bottom:5px;
    display: grid;
    grid-template-columns: 80px 1fr;
    position: relative;

    .leftImg{
        max-width:80px;
        max-height:80px;
    }

    .rightSide{
        margin-left:10px;
        max-height:80px;
    }

    h1{
        ::first-letter {
            text-transform: uppercase;
            }
        word-spacing: 5px;
        margin-top: 10px;
    }

    .bottom{
        display: flex;
        align-items: center;
        font-size: ${fontSize[14]};
        position: absolute;
        bottom: 0;
        left: 90;
    }

    .date{
        white-space: nowrap;
        color: #e8e8e8;
    }

    .portrairImg{
        width:20px;
        border-radius: 50%;
        margin:0 10px;
    }

    .name{
        white-space: nowrap;
    }

`;

export const LatestPublications: FC = () => {

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
        <Wrapper>

            {usersPost.slice(0, 3).map((x: any) => {
                return (
                    <InnerWrapper>
                        <img className="leftImg" src={usersPhoto[x.userId]?.url} alt="Post img" />
                        <div className="rightSide">
                            <h1>{x?.title}</h1>
                            <div className="bottom">
                                <span className="date">7 jan. 2020</span>
                                <img className="portrairImg" src={usersPhoto[x.userId]?.url} alt="Portrair img" />
                                <span className="name">{usersList[x.userId]?.name}</span>
                            </div>
                        </div>
                    </InnerWrapper>
                )
            })}
            
        </Wrapper>

    );
};