import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    setCurrentUser: () => {},
    setUserToken: () => {},
});

const tmpSurveys = [
    {
        id: 1,
        image_url: "https://d33wubrfki0l68.cloudfront.net/b58b4086e25febc9a4a1e7c1a015850e8031ea3b/6061d/images/risto.webp",
        title: "Ricoboys YouTube channel",
        slug: "thecodeholic-youtube-channel",
        status: true,
        description:
            "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the channel is to share my several years of experience with beginner developers.<br>Teach them what I know and make my experience as a lesson for others.",
        created_at: "2022-01-07 13:23:41",
        updated_at: "2022-01-18 16:34:19",
        expire_date: "2022-01-23",
        questions: [
            {
                id: 15,
                type: "text",
                question: "From which country are you?",
                description: null,
            },
            {
                id: 16,
                type: "checkbox",
                question:
                    "Which language videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "8ee03188-9e7e-44e5-9176-7574c0beec6f",
                            text: "JavaScript",
                        },
                        {
                            uuid: "fe9497f2-8f05-4c82-9586-26e36736fa9e",
                            text: "PHP",
                        },
                        {
                            uuid: "db0f194c-d32d-4e19-929e-08f7b4e2bcc0",
                            text: "HTML + CSS",
                        },
                        {
                            uuid: "93273c4c-ac8f-432e-b847-e467df64ab9c",
                            text: "All of the above",
                        },
                        {
                            uuid: "d54818a7-ad7e-4b69-9287-16a8dc50a6cb",
                            text: "Everything Zura thinks will be good",
                        },
                    ],
                },
            },
            {
                id: 17,
                type: "select",
                question:
                    "Which PHP framework videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "fb907cfe-b7a1-4b24-86fb-03f9c44aa710",
                            text: "Laravel",
                        },
                        {
                            uuid: "e2629262-93ca-4a7a-8129-19c765664a04",
                            text: "Yii2",
                        },
                        {
                            uuid: "9a11a425-d9fe-4fe9-86af-bb814e3d9271",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "484268b1-d3aa-47f8-a185-356ed48e50fe",
                            text: "Symfony",
                        },
                    ],
                },
            },
            {
                id: 18,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "c02e50e6-5ebf-4344-9822-baa16502dbdb",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "90a15aae-ef4c-4d04-aa05-8e840d4a2ded",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "93c64532-c1eb-4bfd-bd00-ab51cafdee78",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "51f6a704-7a86-47a4-9b2d-72bb026a3371",
                            text: "Laravel 8",
                        },
                    ],
                },
            },
            {
                id: 19,
                type: "checkbox",
                question:
                    "What type of projects do you want to see on my channel built with Laravel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "c5519ab0-3282-4758-a34b-506052bf1342",
                            text: "REST API",
                        },
                        {
                            uuid: "dfbbc0af-8fff-44ae-be36-e85270041729",
                            text: "E-commerce",
                        },
                        {
                            uuid: "6940c122-505f-4d9d-a103-472f923fad94",
                            text: "Real Estate",
                        },
                        {
                            uuid: "2b3c12a4-8f3c-4276-ae59-4e9d55e849be",
                            text: "All of the above",
                        },
                    ],
                },
            },
            {
                id: 22,
                type: "textarea",
                question: "What do you think about TheCodeholic channel?",
                description:
                    "Write your honest opinion. Everything is anonymous.",
                data: [],
            },
            {
                id: 23,
                type: "text",
                question: "Which channel is your favorite one?",
                description: null,
                data: [],
            },
        ],
    },
    {
        id: 2,
        image_url: "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
        title: "React",
        slug: "react",
        status: true,
        description:
            "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        created_at: "2022-01-07 08:50:40",
        updated_at: "2022-01-07 13:37:37",
        expire_date: "2022-02-01",
        questions: [],
    },
    {
        id: 3,
        image_url: "data:image/png;base64,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",
        title: "Laravel 9",
        slug: "laravel-9",
        status: true,
        description:
            "Laravel is a web application framework with expressive, elegant syntax. We\u2019ve already laid the foundation \u2014 freeing you to create without sweating the small things.",
        created_at: "2022-01-07 13:28:56",
        updated_at: "2022-01-07 13:28:56",
        expire_date: "2022-01-20",
        questions: [],
    },
];

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        // name: "Ricoboy",
        // email: "ricoboy@gmail.com",
        // imageUrl:
        //     "https://d33wubrfki0l68.cloudfront.net/b58b4086e25febc9a4a1e7c1a015850e8031ea3b/6061d/images/risto.webp",
    });
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');

    const [surveys, setSurveys] = useState(tmpSurveys);
 
    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token); 
        } else {
                localStorage.removeItem('TOKEN');
        }
        _setUserToken(token);
    }

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                surveys,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
