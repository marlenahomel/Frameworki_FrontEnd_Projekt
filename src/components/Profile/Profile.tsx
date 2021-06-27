import {FC,useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>

const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 10px 0;
    padding-top:10px;
    padding-bottom: 40px;
    background: white;
    .table{
        display: grid;
        grid-template-columns: 16% 16% 16% 16% 16% 16%;
        margin-top:10px;
        #name{
            grid-column: 1;
        }
        #entity{
            grid-column: 2;
        }
        #location{
            grid-column: 3;
        }
        #expertise{
            grid-column: 4;
        }
        #date{
            grid-column: 5;
        }
        #firm{
            grid-column: 6;
        }
    }
    h1{
        margin:20px 0;
        font-weight: bold;
    }
    #maintable{
        font-weight: bold;
        border-bottom: 1px solid ${Colors.lightgray};
        padding-bottom: 10px;
    }
`;

const TopProfile = styled.div`
    display: flex;
    float:right;
    .button{
        display: flex;
        align-items: center;
        margin-right: auto;
        margin:0 14px;
        img {
        width: 20px;
        margin:0 4px;
    }}
`;

const UserProfile = styled.div`
    display:grid;
    margin:50px 0 20px 0;
    grid-template-columns: 40% 60%;
    .left{
        grid-column: 1;
        text-align:center;
        img{
            width:30%;
            border-radius: 50%;
        }
        p{
            color:${Colors.lightgray2}
        }
    }
    .right{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 25% 25% 25% 25%;
        line-height: 26px;
        img{
            width:28px;
        }
        #name{
            grid-column: 1;
            grid-row: 1;
        }
        #companyName{
            grid-column: 1;
            grid-row: 2;
        }
        #address{
            grid-column: 1;
            grid-row: 3;
        }
        #username{
            grid-column: 1;
            grid-row: 4;
        }
        #pencil{
            grid-column: 2;
            grid-row: 1;
            text-align:right;
        }
        #email{
            grid-column: 2;
            grid-row: 3;
        }
        #phone{
            grid-column: 2;
            grid-row: 4;
        }
        
    }
`;

const Expertise = styled.div`
    border-top: 1px solid ${Colors.lightgray};
    .singleExpertise{
        display: flex;
        column-gap: 10px;
        margin:10px;
    }
    #expertiseTop{
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
    }
    #expertiseTitle{
        grid-column: 1;
    }
    #expertisePencil{
        grid-column: 2;
        text-align:right;
        background: white;
    }
    img{
        width:28px;
    }
    p{
        padding:5px;
        background-color: ${Colors.lightgray};
    }
`

const PanelInformation = styled.div`
    border-top: 1px solid ${Colors.lightgray};
    .informationDiv{
        margin:10px;
        h2{
            margin:10px 0;
        }
        #attachment{
            margin:10px 0;
            background: ${Colors.lightgray};
            padding:10px;
            display: flex;
            align-items:center;
            img{
                margin-right: 20px;
            }
        }
        .singleInformationDiv{
            background-color: ${Colors.lightgray};
            display: grid;
            grid-template-columns: 5% 35% 1fr 1fr;
            align-items: center;
            margin:5px 0;
            .profile{
                grid-column: 4;
                display: flex;
                align-items: center;
                img{
                    width:20px;
                    margin-right:5px;
                }
            }
            .name{
                grid-column: 2;
            }
            .message{
                grid-column: 3;
                display: flex;
                align-items: center;
                img{
                    width:20px;
                    margin-right:5px;
                }
            }
            img{
                grid-column: 1;
                border-radius: 50%;
                width:30px;
            }
        }
    }
`;

const Proposals = styled.div`
    border-top: 1px solid ${Colors.lightgray};
    #seemoreproposals{
        margin-top:10px;
        margin-right:10px;
        padding-bottom: 20px;
        text-align: right;
    }
`;

const InternalReviews = styled.div`
    border-top: 1px solid ${Colors.lightgray};
`;

const AmountOfFees = styled.div`
    border-top: 1px solid ${Colors.lightgray};
    .tableFees{
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin-top:10px;
        #tableFees1{
            grid-column: 1;
        }
        #tableFees2{
            grid-column: 2;
        }
        #tableFees3{
            grid-column: 3;
        }
        #tableFees4{
            grid-column: 4;
        }
    }
`;

export const Profile: FC = () => {

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
            <TopProfile>
                    <div className="button">
                        <img src="./media/icons/people.png" alt="Message img"/>
                        <span className="text">Message</span>
                    </div>

                    <div className="button">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Create a request</span>
                    </div>

                    <div className="button">
                        <img src="./media/icons/network.png" alt="Message img"/>
                        <span className="text">Add to a cluster</span>
                    </div>

                    <div className="button">
                        X
                    </div>
            </TopProfile>
            <UserProfile>
                <div className="left">
                    <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                    <p>See profile</p>
                </div>

                <div className="right">
                    <p id="name">{usersList[0]?.name}</p>
                    <p id="companyName">{usersList[0]?.company.name}</p>
                    <p id="address">{usersList[0]?.address.city}</p>
                    <p id="username">{usersList[0]?.username}</p>
                    <p id="pencil"><img src="./media/penicon.jpg" alt="Pen icon"/></p>
                    <p id="email">{usersList[0]?.email}</p>
                    <p id="phone">{usersList[0]?.phone}</p>
                </div>

            </UserProfile>
            <Expertise>
                <div id="expertiseTop">
                    <h1 id="expertiseTitle">Expertise</h1>
                    <p id="expertisePencil"><img src="./media/penicon.jpg" alt="Pen icon"/></p>
                    </div>

                <div className="singleExpertise" id="expertise">
                    <p>Mergers and acquisition</p>
                    <p>Mergers and acquisition</p>
                </div>

                <h1>Specialties</h1>
                <div className="singleExpertise" id="specialties">
                    <p>Cross border operation</p>
                    <p>Transaction over 500M$</p>
                </div>

                <h1>Admission to practice law</h1>
                <div className="singleExpertise" id="admission">
                    <p>Paris bar association</p>
                    <p>Tunisian bar association</p>
                </div>

                <h1>Counties</h1>
                <div className="singleExpertise" id="counties">
                    <p>Tunisia</p>
                </div>
            </Expertise>
            <PanelInformation>
                <h1>Panel information</h1>

                <div className="informationDiv">
                    <h2>Hourly fee</h2>
                    <p>610$/hour (Negociated)</p>
                </div>

                <div className="informationDiv">
                    <h2>Terms &amp; conditions</h2>
                    <p>Monthly 10k$ retainer - see with {usersList[1]?.name}</p>

                    <div id="attachment">
                        <img src="./media/icons/ecosystem.png" alt="attach"/>
                        file.pdf
                    </div>
                </div>

                <h1>Services &amp; projects</h1>

                <div className="informationDiv">
                    <p>Corporate M&amp;A and international acquistions</p>
                </div>

                <h1>Internal correspondants</h1>

                <div className="informationDiv">
                    <div className="singleInformationDiv">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Message
                            </div>
                        <div className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Profile
                            </div>
                    </div>
                    <div className="singleInformationDiv">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Message
                            </div>
                        <div className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Profile
                            </div>
                    </div>
                </div>
            </PanelInformation>
            <Proposals>
                <h1>Proposals</h1>

                <div className="table" id="maintable">
                    <div id="name">
                        <p>Name</p>
                    </div>

                    <div id="entity">
                        <p>Entity</p>
                    </div>

                    <div id="location">
                        <p>Location</p>
                    </div>

                    <div id="expertise">
                        <p>Expertise</p>
                    </div>

                    <div id="date">
                        <p>Date</p>
                    </div>

                    <div id="firm">
                        <p>Firm</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Operation Ti...</p>
                    </div>

                    <div id="entity">
                        <p>Renault Co ...</p>
                    </div>

                    <div id="location">
                        <p>France</p>
                    </div>

                    <div id="expertise">
                        <p>#Tax</p>
                    </div>

                    <div id="date">
                        <p>20/01/2018</p>
                    </div>

                    <div id="firm">
                        <p>Racine</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Prometh...</p>
                    </div>

                    <div id="entity">
                        <p>Renault HQ</p>
                    </div>

                    <div id="location">
                        <p>USA</p>
                    </div>

                    <div id="expertise">
                        <p>#M&amp;A</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>Clifford chance</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Latandre</p>
                    </div>

                    <div id="entity">
                        <p>Renault Br ...</p>
                    </div>

                    <div id="location">
                        <p>Italia</p>
                    </div>

                    <div id="expertise">
                        <p>#Social</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>SVZ</p>
                    </div>
                </div>

                <p id="seemoreproposals">See more proposals</p>

            </Proposals>

            <InternalReviews>
            <h1>Internal reviews</h1>


            <div className="table" id="maintable">
                    <div id="name">
                        <p>Name</p>
                    </div>

                    <div id="entity">
                        <p>Entity</p>
                    </div>

                    <div id="location">
                        <p>Location</p>
                    </div>

                    <div id="expertise">
                        <p>Expertise</p>
                    </div>

                    <div id="date">
                        <p>Date</p>
                    </div>

                    <div id="firm">
                        <p>Firm</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Operation Ti...</p>
                    </div>

                    <div id="entity">
                        <p>Renault Co ...</p>
                    </div>

                    <div id="location">
                        <p>France</p>
                    </div>

                    <div id="expertise">
                        <p>#Tax</p>
                    </div>

                    <div id="date">
                        <p>20/01/2018</p>
                    </div>

                    <div id="firm">
                        <p>Racine</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Prometh...</p>
                    </div>

                    <div id="entity">
                        <p>Renault HQ</p>
                    </div>

                    <div id="location">
                        <p>USA</p>
                    </div>

                    <div id="expertise">
                        <p>#M&amp;A</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>Clifford chance</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Latandre</p>
                    </div>

                    <div id="entity">
                        <p>Renault Br ...</p>
                    </div>

                    <div id="location">
                        <p>Italia</p>
                    </div>

                    <div id="expertise">
                        <p>#Social</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>SVZ</p>
                    </div>
                </div>

                <h1 id="moreReviews">See more Reviews</h1>


            </InternalReviews>
            <AmountOfFees>
                <h1>Amount of fees</h1>

                <div className="tableFees" id="maintable">
                    <div id="tableFees1">
                        <p>Year</p>
                    </div>

                    <div id="tableFees2">
                        <p>Cost center</p>
                    </div>

                    <div id="tableFees3">
                        <p>Total amount</p>
                    </div>

                    <div id="tableFees4">
                        <p>Law firm</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="tableFees1">
                        <p>2019</p>
                    </div>

                    <div id="tableFees2">
                        <p>CS 153</p>
                    </div>

                    <div id="tableFees3">
                        <p>3 500$</p>
                    </div>

                    <div id="tableFees4">
                        <p>Clifford chance</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="tableFees1">
                        <p>2018</p>
                    </div>

                    <div id="tableFees2">
                        <p>CS 153</p>
                    </div>

                    <div id="tableFees3">
                        <p>9 500$</p>
                    </div>

                    <div id="tableFees4">
                        <p>Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="tableFees1">
                        <p>2017</p>
                    </div>

                    <div id="tableFees2">
                        <p>CS 47</p>
                    </div>

                    <div id="tableFees3">
                        <p>10 500$</p>
                    </div>

                    <div id="tableFees4">
                        <p>Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="tableFees1">
                        <p></p>
                    </div>

                    <div id="tableFees2">
                        <p>CS 153</p>
                    </div>

                    <div id="tableFees3">
                        <p>18 500$</p>
                    </div>

                    <div id="tableFees4">
                        <p>Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="tableFees1">
                        <p></p>
                    </div>

                    <div id="tableFees2">
                        <p>CS 32</p>
                    </div>

                    <div id="tableFees3">
                        <p>15 500$</p>
                    </div>

                    <div id="tableFees4">
                        <p>Linklaters</p>
                    </div>
                </div>

            </AmountOfFees>
        </Wrapper>
    );
};