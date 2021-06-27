import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getComments } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import useDropdown from 'react-dropdown-hook';
import { ExpandedMenu2 } from './ExpandedMenu2';

type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>

const InnerWrapper = styled.div`
    max-width:940px;
`;

const RightSide = styled.div`
display:flex;
align-items:right;
margin:0 0 0 10px;

.title{
    font-size: ${fontSize[20]};
    margin-right: 48%;
}
    a{
        text-decoration:none;
    }
`;

const Bottom = styled.div`
    background: ${Colors.white};
    margin-top:30px;
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    h1{
        font-size:${fontSize[20]};
        color:${Colors.purple};
        margin-bottom:10px;
        ::first-letter {
            text-transform: uppercase;
        }
    }

    p{
        font-size:${fontSize[18]};
        ::first-letter {
            text-transform: uppercase;
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 20px;
        color: ${Colors.purple};
        border: none;
        outline: none;
        user-select: none; /* no background on double click */

        .previous{
            margin-right:10px;
        }
        .active {
            color:${Colors.black};
        }
        .break-me{
        }
        .page{
            margin: 0 10px;
        }
        .next{
            margin-left:10px;

        }
    }
`;

const Bottom2 = styled.div`
    margin:10px 0px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    img{
      width:20px;
}`

const MenuWrapper = styled.div`
    cursor:pointer;
    display:flex;
    align-items: center;
    column-gap: 12px;
    user-select: none; 
    font-size: ${fontSize[18]};
    font-weight: bold;
    color:${Colors.purple};
    img{
        float:right;
    }

`;

export const ResumeYourWork: FC = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    const { usersList, usersComment } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }

    return (
        <InnerWrapper>

            <RightSide>
                <span className="title">Resume your work</span>              
                <input type="text" placeholder="Filter by title..." />
                <img src="./media/icons/search.png" id="search" alt="" />
                <img src="./media/icons/ecosystem.png" alt="" />
                <MenuWrapper ref={wrapperRef} onClick={menuHandler}>
                    Followed
                    <img src="./media/icons/arrow-down.png" alt="arrow-down" />
                    {dropdownOpen &&
                        <ExpandedMenu2 />
                    }
                </MenuWrapper>
            </RightSide>
            <Bottom>
                {usersComment.slice(currentPage, currentPage + 10).map((x: any) => {
                    return (

                        <div id="content">
                            <h1>{x?.name}</h1>
                            <p>{x?.body}</p>
                            <Bottom2>
                                <img src="./media/logo.png" alt="Logo img" />
                                <span>Subsid. corp. </span>
                                &#9679;
                                <img src="./media/contractsmall.jpg" alt="Icon img" />
                                <span>Corporate</span>
                                &#9679;
                                Updated 3 days ago by {usersList[x?.id]?.name}
                            </Bottom2>

                        </div>
                    )

                })}
                <ReactPaginate
                    previousLabel={'PREVIOUS'}
                    nextLabel={'NEXT'}
                    breakLabel={'...'}

                    pageCount={Math.ceil(usersComment.length / 10)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}

                    containerClassName={'pagination'}
                    previousClassName={'previous'}
                    pageClassName={'page'}
                    breakClassName={'break-me'}
                    activeClassName={'active'}
                    nextClassName={'next'}
                />

            </Bottom>

        </InnerWrapper>
    );
};