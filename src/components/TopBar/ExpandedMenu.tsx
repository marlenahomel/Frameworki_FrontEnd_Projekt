import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Link } from "react-router-dom";
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>

const Wrapper = styled.div`
        position:absolute;
        background: ${Colors.white};
        padding-top:10px;
        margin-left:24px;
        border: 1px solid lightgray;
        width:200px;
        display:grid;
        z-index: 1;
        a{
            text-decoration: none;
            color: inherit;
        }
        ul{
            font-size:15px;
        }
        li{
            margin-top:10px;
            margin-bottom:10px;
        }
        .icons{
            margin-right:20px;
        }
        .category{
                font-size:12px;
            }
    `;

const CustomInput = styled.input`
        border:1px solid lightgray;
        padding:4px;
        text-align:left;
        &:outline{
            outline:none;
        }
        &:focus{
            outline:none;
        }
    `;

const Account = styled.div`
        display:grid;
        grid-template-columns:60px 1fr;
        grid-template-rows: 1fr;
        border-top:1px solid lightgray;
        border-bottom:1px solid lightgray;
        align-items: center;
        #userphoto{
            width:28px;
            border-radius:90px;
            grid-column: 1;
            grid-row: 1;
        }
        #name{
            grid-column: 2;
            grid-row: 1;
            margin-bottom:30px;
            color:blue;
        }
        #see{
            grid-column: 2;
            grid-row: 1;
            margin-top:30px;
            font-size:12px;
        }
    `;

const Logout = styled.div`
        text-align:center;
        padding:10px;
        border-top:1px solid lightgray;
        img{
            padding-right:16px;
        }
    `;

export const ExpandedMenu: FC = () => {
    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>
            <ul>
                <CustomInput type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />

                <li className="category">Platform</li>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/">
                        <li><img src="./media/icons/house2.png" className="icons" />Home</li>
                    </Link>
                }
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/publications.png" className="icons" />Publications</li>
                    </Link>
                }
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/people.png" className="icons" />People</li>
                    </Link>
                }
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/entities">
                        <li><img src="./media/icons/entities2.png" className="icons" />Entities</li>
                    </Link>
                }
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/administration.png" className="icons" />Administration</li>
                    </Link>
                }
                <li className="category">Workspaces</li>
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/ecosystem.png" className="icons" />Client contract</li>
                    </Link>
                }
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/ecosystem.png" className="icons" />Supplier contract</li>
                    </Link>
                }
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/ecosystem.png" className="icons" />Corporate contract</li>
                    </Link>
                }
                {'Group norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/ecosystem.png" className="icons" />Group norms</li>
                    </Link>
                }
                {'Real estate contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                        <li><img src="./media/icons/ecosystem.png" className="icons" />Real estate contract</li>
                    </Link>
                }
                <Link to="/profile">
                <li className="category">Account</li>
                <Account>
                        <img id="userphoto" src={usersPhoto[0]?.url}></img>
                        <li id="name">{usersList[0]?.name}</li>
                        <li id="see">See profile</li>
                </Account>
                </Link>
                {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/profile">
                        <li><img src="./media/icons/privacy.png" className="icons" />Privacy</li>
                    </Link>
                }
                {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/profile">
                        <li><img src="./media/icons/settings.png" className="icons" />Settings</li>
                    </Link>
                }
            </ul>

            <Logout>
                <img src="./media/icons/logout.png" />
                <span>Logout</span>
            </Logout>
        </Wrapper>
    );
};