import React, { useEffect, useState } from "react";
import moment from "moment";

import {
    Avatar,
    Button,
    ButtonGroup,
    calcInitialsAvatarColor,
    Group,
    InitialsAvatar,
    Link,
    Pagination,
    RichCell,
    Search,
} from "@vkontakte/vkui";

interface IChat {
    photo: null | {
        photo_50: string;
        photo_100: string;
        photo_200: string;
        is_default_photo: false;
    };
    dateOfPublication: number;
    numberOfParticipants: number;
    title: string;
    key: string;
    update: number;
}

interface IAPIResponse {
    found: number;
    totalСonversation: number;
    chats: IChat[];
}

const getConversations = async (): Promise<IAPIResponse> => {
    // const response = await axios.get("https://search-for-chats-of-vk.ru/", {
    //     params: {
    //         limit: 25,
    //     },
    // });

    await Promise.resolve();

    return {
        found: 9649,
        totalСonversation: 9649,
        chats: [
            {
                photo: null,
                dateOfPublication: 1659296613000,
                numberOfParticipants: 6,
                title: "Татьяна, Маринататьна",
                key: "AJQ1dxHNUiLjQb2Q/kANwrDx",
                update: 1661203075312,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-85.userapi.com/s/v1/ig2/pyP7Py07n0qy-vdnvTwWp0j_bq7dQ6KT-vau77EtzYm7Wgz0XVxhlED6YDNtdNqDOFMkQolw-7_AvbEDTcP4h_1H.jpg?size=50x50&quality=96&crop=110,417,1074,1074&ava=1",
                    photo_100:
                        "https://sun9-85.userapi.com/s/v1/ig2/036RfbYZ1tytlfpPrN9wHW51knei8kCNn-9IVuDnDIl_jNoQvZWIdu9GzZuzrrFzI8cgGI9tsKRbuzRqEZTV-_nv.jpg?size=100x100&quality=96&crop=110,417,1074,1074&ava=1",
                    photo_200:
                        "https://sun9-85.userapi.com/s/v1/ig2/JKjzSssWVkqSGO211qsANLGrjRkzLT1bDMN4rmPXvqU_WBA1kTlGy6IGT8uWhp3-MQKvh1MGsBa22BS0oTc-9qnl.jpg?size=200x200&quality=96&crop=110,417,1074,1074&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661202342000,
                numberOfParticipants: 38,
                title: "бабадибопти)",
                key: "p4DKeLdD5R1/egVge38b8cfPtCtU/MssxoE=",
                update: 1661203055356,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-61.userapi.com/s/v1/ig2/mOS5JTwPCu993PWSGtGts-cMZMKK4h9hI0-teZnC0m1JoDvJXOXKtN0vxSp8AT-w67fzykMOaGhvPpKujYZ9CAwT.jpg?size=50x50&quality=95&crop=0,0,1280,1280&ava=1",
                    photo_100:
                        "https://sun9-61.userapi.com/s/v1/ig2/3Tfuk7-fbyhDmDA7-krvMHbZQZUklLIVtvAuWLidr6aGFgAVpXcs1bzr7Imo73w1BFanLJxY67D5nw67_GhhDK7Y.jpg?size=100x100&quality=95&crop=0,0,1280,1280&ava=1",
                    photo_200:
                        "https://sun9-61.userapi.com/s/v1/ig2/NBz1heK56PTUaJwhpDrMrMXBmWtF8L9nDLHk6MOTHBvhqfUUk-4Efwylf-E_nem7eDYukmhO8IOed0MLMm6tY6Pz.jpg?size=200x200&quality=95&crop=0,0,1280,1280&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661202300000,
                numberOfParticipants: 6,
                title: "GARO | Беседа подписчиков",
                key: "ONvSiXTeF5Lt2_9pbWcjw3bmKzyX2pCBHpU=",
                update: 1661203055356,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-11.userapi.com/s/v1/ig2/KB3-a_nfYcutM8BP9_k4EKXsGjnzZytYYzlOY--TC7abYWP8RtBcTGiVsrKRDVM1FvPHrxFoBryFiSq6eiFA_fws.jpg?size=50x50&quality=95&crop=15,0,530,530&ava=1",
                    photo_100:
                        "https://sun9-11.userapi.com/s/v1/ig2/85n9yrHD3VDaR-BG8gGf1Vi5bhUmbJA_TL_zuDW6dQ5YRw6AoQ7xIt4OWQxZoTjcRphSYf3VGJSeky2GPwbUch-x.jpg?size=100x100&quality=95&crop=15,0,530,530&ava=1",
                    photo_200:
                        "https://sun9-11.userapi.com/s/v1/ig2/pAR6vTH7tShxiDoM0d9k0m4LGwftPWo9cqwFjGSVaYptuFJl27-vd7RBi1W1jh4XJNy4qqx9odkmdM6Vl8tlFcMT.jpg?size=200x200&quality=95&crop=15,0,530,530&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200805000,
                numberOfParticipants: 610,
                title: "💭 Чат рыбаков 🎣",
                key: "Jk7Hcy4iU/MqAiUjckuA4EYWO5mkYi/Kb6Q=",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-68.userapi.com/s/v1/ig2/u1CyNs8yBVe9c4n67_zLJivHYuCGXs8_tAtl3U5vgs85Th2LwLXxrqvpwHpRl7XtnTQVQvHxQZCNIrdkWAO2iU6j.jpg?size=50x0&quality=96&crop=0,0,984,984&ava=1",
                    photo_100:
                        "https://sun9-68.userapi.com/s/v1/ig2/8QKRg_d6qHfEMH_aQck7R8IlfVCBGM3yUN4HRocfwgOoZJOpMtQukvCK9KLQnyzP60BiKXITh3wWTbo54pATtC4x.jpg?size=100x0&quality=96&crop=0,0,984,984&ava=1",
                    photo_200:
                        "https://sun9-68.userapi.com/s/v1/ig2/H0kCgsOvUK2JejEDn6Ln0jdGtrtEP5WRAG1GhxJ2jjEY4WsEeu7a7yN0vK_cqC5wkK_xUuNd8isWCx4P8S3PtbAV.jpg?size=200x0&quality=96&crop=0,0,984,984&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200891000,
                numberOfParticipants: 50,
                title: "РЕГИСТРАЦИИ 💰",
                key: "AJQ1dw1XUx_wLGNou3Yg9l36",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-1.userapi.com/s/v1/ig2/A7L2Vf22mgX6NIHlZef13HsOGTt6SRYd7dfXLG6YDLZ2L08qPSzBH8Lx6fWx1wFETOuRKREs4MikOb_4xeUsJrkD.jpg?size=50x50&quality=95&crop=0,18,736,736&ava=1",
                    photo_100:
                        "https://sun9-1.userapi.com/s/v1/ig2/mtbN-kaS4XouMD8aSLKtxXzY3HhdfirpjQvDQn7qvtWozLCvOtH80k5HRcUiVV9xNQSgznYmZiEdm8Q83qJ0eXlg.jpg?size=100x100&quality=95&crop=0,18,736,736&ava=1",
                    photo_200:
                        "https://sun9-1.userapi.com/s/v1/ig2/Wmem2sT4K6C0zUdpxrD3EJ2KoXg7N0iyqJ1PIgX7P2aELuu2ZIwpGIY6q_7E9O04ame0mmtolG67FOAB8UbXKEZ5.jpg?size=200x200&quality=95&crop=0,18,736,736&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661201171000,
                numberOfParticipants: 40,
                title: "ЭLLита",
                key: "AJQ1d82VmSKhit60YqoZPokE",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-15.userapi.com/s/v1/ig2/csIK3qMY-YaaC8DYqokxZLi87st-aYh42vzjlch57WCT6vS0Zh4J1415dF-1qjrIX1KabDZbLWLStOKVhVO4u9s3.jpg?size=50x0&quality=96&crop=0,0,512,512&ava=1",
                    photo_100:
                        "https://sun9-15.userapi.com/s/v1/ig2/fX5ENAbeFJ44OiDoaeMOx3lFCBqiUL5VZbzKtple_6h3M4x8hOj7AeDHzpTfaqI6ln3Tk4uv1cC8_iJpHBSsTcy2.jpg?size=100x0&quality=96&crop=0,0,512,512&ava=1",
                    photo_200:
                        "https://sun9-15.userapi.com/s/v1/ig2/4-6-MUFBsWmyY-C5hP13el581Jpy3XH0oSErIzh2u0PxErJl5-Zho5ADOdAmHBw78nwBYbH4lrhzXdOa59CYC6kW.jpg?size=200x0&quality=96&crop=0,0,512,512&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661201356000,
                numberOfParticipants: 561,
                title: "Arizona Glower | Беседа Игроков",
                key: "AJQ1d54HKyID9khNb1v1DcG9",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50: "https://vk.com/images/community_50.png",
                    photo_100: "https://vk.com/images/community_100.png",
                    photo_200: "https://vk.com/images/community_200.png",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200634000,
                numberOfParticipants: 72,
                title: "re:load",
                key: "xNJRFOTIwAgLol_JV72RtCyNohX1wPvl23U=",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-61.userapi.com/s/v1/ig2/zmM5EAaIVIUmpujcNPFbfTU-KweDlE_7sqLsJv5ECeEtMfl2D-bmPj9I6NIf4HO44O3jP7x2rr9kSBAN6DA22XJI.jpg?size=50x0&quality=96&crop=0,0,656,656&ava=1",
                    photo_100:
                        "https://sun9-61.userapi.com/s/v1/ig2/wIMba2Ly2gYWVMlFu-UWT2slGbg9KArtk1n-beqVXaH304Shn_vkhjA8S0wBTEj7KyBoIqC_UbQfEOjZ0clIgrcp.jpg?size=100x0&quality=96&crop=0,0,656,656&ava=1",
                    photo_200:
                        "https://sun9-61.userapi.com/s/v1/ig2/uX6pFe18GY2H4ZWfDN1I2kUebnPOCJhxJFf2tUOtBNObz1Ml9NgrCfIcK8fIUl-OeFmDyPYFIasuYhMRdAl839hn.jpg?size=200x0&quality=96&crop=0,0,656,656&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200804000,
                numberOfParticipants: 121,
                title: "ДПС Дивеево ",
                key: "AJQ1d_SikiLGnS6rdeC14PJO",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-80.userapi.com/s/v1/ig2/-LttEtPvlqkK7BKIn8NJHFEcGzJvGIN4wcXXIEMeyhKd_-43jAlPx5S_JKhnko7A9HXI441XYzcumTzrkMUXGAFE.jpg?size=50x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_100:
                        "https://sun9-80.userapi.com/s/v1/ig2/HhoXhbS3gWbM6T3ZxK-0guPrVADYHRO4cX0gm0jEEKc1bPCcJ9d_liwrRz0Ld_lCGu_gTIAx0FZoShyLaiXAMZl-.jpg?size=100x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_200:
                        "https://sun9-80.userapi.com/s/v1/ig2/ZAQgwTIkzqkkA3TCheKX5BHS4zBJDszPlafnCD713Kpscy6zlwy_X6dcuuk8nd2ZAPv6Lzt36GLnAqriqsfbK9MG.jpg?size=200x0&quality=96&crop=0,0,992,992&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200263000,
                numberOfParticipants: 4,
                title: "Чат для викторин ",
                key: "AJQ1dyAWeCL6O5UJJUT0L6Fu",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-34.userapi.com/s/v1/ig2/w7M-ELQ7ChyToqb3QMfem6RuWzwckisx_uhXqwnExICkTzrog3iE8lehhrW-cxQx9jSxEGO-mgtd45-Hf9imVryh.jpg?size=50x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_100:
                        "https://sun9-34.userapi.com/s/v1/ig2/kIbz7iHUp-27o-Xklumh8HyP-BGghlGxurxN4-QybPKjXzoBIR_mkth4R_p-Knjzt8sSMblBk56IWswelnm1shr0.jpg?size=100x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_200:
                        "https://sun9-34.userapi.com/s/v1/ig2/WdQ2XeNEpWglI8HqMTQmozkn6lbDncMZrrErqV83hc9nwsea1L8WqyJ8NlQwki8DtvtWDJR0j_3g-fgiVd4kllzV.jpg?size=200x0&quality=96&crop=0,0,992,992&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200339000,
                numberOfParticipants: 1,
                title: "Car Parking |продажи| |обмены| |покупки|",
                key: "AJQ1d3cTrSL1GafcLwRaxSqW",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-51.userapi.com/s/v1/ig2/OTRhCP-RrC1Khb8kM2GecKRI9nHVtAEyk_OqWAFGq3UC5hmuqYFtUS0FXHQgJ_x5UtNh3QeTPnpEdPSvcRNnluGc.jpg?size=50x50&quality=95&crop=68,380,615,615&ava=1",
                    photo_100:
                        "https://sun9-51.userapi.com/s/v1/ig2/dvgUfS0LIWOP8Jn69zCn4kxVPFfRgPXQn9_BxIhSSmIXggTMGEfahtErwgvENAY7yvnRGoVBh6xnTyfFSZolyWHj.jpg?size=100x100&quality=95&crop=68,380,615,615&ava=1",
                    photo_200:
                        "https://sun9-51.userapi.com/s/v1/ig2/ES7hNtJY6Khot_CLaOOWJNjXzvdPLJ6IEivfsAy9cdc_a6BQ_C4oqlxDYo_jq4_DxYoaeIJxfJiXmpGxZ5EX-UY-.jpg?size=200x200&quality=95&crop=68,380,615,615&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661200495000,
                numberOfParticipants: 10,
                title: "SSTREET.SHOP📲",
                key: "AJQ1dypmIiLQhSxET3f/dPY3",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-35.userapi.com/s/v1/ig2/issRvZtKiSsOdkqmHPFGOJvn-SBBMyaLyEFhdSH37wkXEuvVaG3uNGPJen45buiUvKKhJwkfVbBXSUeKjJfSWU5R.jpg?size=50x0&quality=96&crop=0,0,664,664&ava=1",
                    photo_100:
                        "https://sun9-35.userapi.com/s/v1/ig2/5M1PJL3NAyEICj5d8zjhjUE9_ErGvpZ9tVISnqClr9CHm64FqGoTpvXiwC9jgzHauGua-5eEIaWX-2FsP1B30l85.jpg?size=100x0&quality=96&crop=0,0,664,664&ava=1",
                    photo_200:
                        "https://sun9-35.userapi.com/s/v1/ig2/CbokRgTkOWIfQQMisQbmrjk6kJEyVZdCdG-fl3Zp_xIgx3JmsA0k56tTVW_KRDMnucF7ay2FUF697_j2dF-46lDi.jpg?size=200x0&quality=96&crop=0,0,664,664&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199663000,
                numberOfParticipants: 6,
                title: "ʷᵈᶜ𝖻𝗋𝖺𝗐𝗅 𝗌𝗍𝖺𝗋𝗌",
                key: "AJQ1dzJakyJopiTPaUxYDM8P",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-18.userapi.com/s/v1/ig2/Q3qapuyeiUuJ8xAkxvJKWWUFLzIgTRFDxYe_eln3cmQMox0Gia2OLWTDQt8a8el7N0hzu6Iwa35Wlbu-R1K1gNB9.jpg?size=50x0&quality=96&crop=0,0,674,674&ava=1",
                    photo_100:
                        "https://sun9-18.userapi.com/s/v1/ig2/uUNMPOcw7w0FGHYvRKKwKBUA_JhhcAFeCGeZ6L3H2EmSijX3cevwDUfToyLhvFQu3GTGGd55hoGOylt9U49iz2Ve.jpg?size=100x0&quality=96&crop=0,0,674,674&ava=1",
                    photo_200:
                        "https://sun9-18.userapi.com/s/v1/ig2/EHoLwdu-mKOGzJ-xmsuE5Kt5zjsVbAe-9m5mahw-1mq_ELfKt9s12vX1vaJmFKtD1C43w6c6lAnVCZEjBZ2r9-4W.jpg?size=200x0&quality=96&crop=0,0,674,674&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199719000,
                numberOfParticipants: 45,
                title: "Притон #леры!!",
                key: "AJQ1dxAAYSDSqcVRZCciuB4Y",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-81.userapi.com/s/v1/ig2/-Jw8khjTobtRED4iNoFbzNkiE9GZWpgxuOPUjWAIv6xwEEPj-8SyilszTOYJ1e1D4ekodGVh4QOq7ZeZ2-qRJy0h.jpg?size=50x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_100:
                        "https://sun9-81.userapi.com/s/v1/ig2/wCsgSN3dZre32KkrKQlEmRJhd9msQttd6tfjz_1de2rWLxh62pYBo21jbfd7jEP5ProkGQKL4ZbcUMF9oT51_eeW.jpg?size=100x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_200:
                        "https://sun9-81.userapi.com/s/v1/ig2/dGSOY3K1wOHzhOD4BP6hZx1dapCfLyf36X78xvNwAyGy928jUvYEUr_3PJak1yzKd75lxRkQN7q2ITtIemCHso43.jpg?size=200x0&quality=96&crop=0,0,992,992&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199750000,
                numberOfParticipants: 13,
                title: "FFIREGGUN| DOUBLE",
                key: "AJQ1d_maOiJy3VcFWu5nYsZB",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-17.userapi.com/s/v1/ig2/mtfeRgAihMpDA3YGbbYNVle5TxRHZg7O1QXEoaW2SU3uEF3f-79dK76RgS8RFl5igoij-eJSZmV2Aa1ADvFRlysY.jpg?size=50x50&quality=95&crop=136,1,807,807&ava=1",
                    photo_100:
                        "https://sun9-17.userapi.com/s/v1/ig2/l22oK5umEGANdv6WFmtMk_-iUCBuPgzLlQMfY-Jfs7UEm_WPWab48nJDJx2ud0kKj6nFNfR4U3bVG8pKPtuc496k.jpg?size=100x100&quality=95&crop=136,1,807,807&ava=1",
                    photo_200:
                        "https://sun9-17.userapi.com/s/v1/ig2/noVz8yrv4VgqCNxX-2Y8Y9v02QlxEKnOC2nHx9DBOI7gcRPB8YgrXAW9btXMPQCIHPRMcA_edUMPBeerzMdjNDvk.jpg?size=200x200&quality=95&crop=136,1,807,807&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199897000,
                numberOfParticipants: 15,
                title: "Чат с хуторскими мужчинами",
                key: "AJQ1d0KoqyJfJXYePdldnmWw",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-87.userapi.com/s/v1/ig2/SdXUrbOkKkucSZ2Q6lXai1g-yQuAACBZE3iHZLKZFijZB3lKGeeFDC7UJZinHhVKdoIXM4NdgIul5PzcOqC3XRw4.jpg?size=50x50&quality=95&crop=1,0,641,641&ava=1",
                    photo_100:
                        "https://sun9-87.userapi.com/s/v1/ig2/ngqdM9quI4q3ER8Ti90XWzuTRIBx-fjphXlRPpDfT8CfcqR6KZblu9KcGiutEjHqYZh5LpMJjUSWKoJpWIcWMuUQ.jpg?size=100x100&quality=95&crop=1,0,641,641&ava=1",
                    photo_200:
                        "https://sun9-87.userapi.com/s/v1/ig2/P6OMzO4KPUaRsF0Z7ElupoSSuNHh0lNnXVh8_bj6kp0ZnG3anFrPCpakfb3jbw2RS1dWs7g9L2HDeeNp7kNfFf08.jpg?size=200x200&quality=95&crop=1,0,641,641&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199242000,
                numberOfParticipants: 20,
                title: "Железобетонные инвестиции",
                key: "AJQ1d3ImniKYT2GsVz1M1m0C",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-1.userapi.com/s/v1/ig2/QXoYVJoIDeCswjK_AA5n4wzOjHVQ2T76TtWHKrQ8ydyZKCX-VA2xFior60Yn5kHS8ufg4hSYFOKJqSOHGrbMOglD.jpg?size=50x50&quality=95&crop=0,129,1248,1248&ava=1",
                    photo_100:
                        "https://sun9-1.userapi.com/s/v1/ig2/40yT4zxlt4AH7l3Bfc06QncDC0NnoP9gUkg5tI5Fu9PBDRWmTOZFqmIZh_S_PlFF_XsUq7Q_AF2EAutlcvTvjkin.jpg?size=100x100&quality=95&crop=0,129,1248,1248&ava=1",
                    photo_200:
                        "https://sun9-1.userapi.com/s/v1/ig2/CN1-2PgJTMF3Fl_7XnLHK6TFilGXEoGMVMEYt2hCYmx4VNFTFawOHOvv3Sv2OM9FWJF7jFseOBi2bgovkWVwSCv4.jpg?size=200x200&quality=95&crop=0,129,1248,1248&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199363000,
                numberOfParticipants: 50,
                title: "- ̗ ̀ БЮРО || Беседа 16+  ̖ ́-",
                key: "AJQ1d09yKiGzQVpI8UC_zvrM",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-3.userapi.com/s/v1/ig2/TvDED03DIZTyVIBLxjISPhB0isHJEnF_SUr7micrHzI62Lz0eZioyXJhscf9wNymo1LbcMbqD9KJUSwDAbwLEDeJ.jpg?size=50x50&quality=95&crop=543,53,585,585&ava=1",
                    photo_100:
                        "https://sun9-3.userapi.com/s/v1/ig2/BulTenjr1kxH8wzicsnMRfR6oSzyx_FaBmUhJc-j4MCk0CuASGH0E6YncxC6ZZ21qeSMu2i77jNfwgzpcX20sBjS.jpg?size=100x100&quality=95&crop=543,53,585,585&ava=1",
                    photo_200:
                        "https://sun9-3.userapi.com/s/v1/ig2/v33mSKxRcagNHocKY1regTPlKQQPHoA4cnu2Z3QghM0s4STxSCwkvH1yRJcEgfrIw1cf4NcUT9p2p6w4OYh_f0qj.jpg?size=200x200&quality=95&crop=543,53,585,585&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199366000,
                numberOfParticipants: 5,
                title: "Чат для почитания Тимофея ",
                key: "AJQ1d3tRwSLPqC3iph9L9tgt",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-31.userapi.com/s/v1/ig2/wMYFVqurjo2RVaOu8QuYnn8otOPT3szgZ5sYnqGuXWWdCfQxpEyCzIu3byC52AXuStt_nJDSwheBcMfzQvV8nhXq.jpg?size=50x0&quality=96&crop=0,0,996,996&ava=1",
                    photo_100:
                        "https://sun9-31.userapi.com/s/v1/ig2/Czc0gC-kVIIPH2g8Ama_UYW4HgNbgejYFV97uY67cp2W-QztzO_lSPOS_0ETXTHVsPgawebEIAtAt9WAuPHAFuNj.jpg?size=100x0&quality=96&crop=0,0,996,996&ava=1",
                    photo_200:
                        "https://sun9-31.userapi.com/s/v1/ig2/qOOxmSuXiuMajVqQ5rz6Zf1YVpmiVNOonYsPUuH-HM3cueck9BZUL6_a1NVBSLOgswInY1-B3B61Ukr0cm3PLyn-.jpg?size=200x0&quality=96&crop=0,0,996,996&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199451000,
                numberOfParticipants: 28,
                title: "inferno",
                key: "AJQ1d9fSWyHQWvGSrI/5FivS",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50: "https://vk.com/images/community_50.png",
                    photo_100: "https://vk.com/images/community_100.png",
                    photo_200: "https://vk.com/images/community_200.png",
                    is_default_photo: false,
                },
                dateOfPublication: 1661199600000,
                numberOfParticipants: 4,
                title: "Носки и прочие товары",
                key: "AJQ1dxp5iSIL9BDSkd1KLMyj",
                update: 1661203045349,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-62.userapi.com/s/v1/ig2/8OpMsUSqNtaLFlrx24Gh1pqBGwlUVs9KONsOXOdAgJCXqUVK5L7zdPARmlrNjJS5Oj8FS7HRmr-i5nIqYRY4KwGT.jpg?size=50x0&quality=96&crop=0,0,996,996&ava=1",
                    photo_100:
                        "https://sun9-62.userapi.com/s/v1/ig2/d8ti_cwr1BvWsc8N5vIGa7s_tRuTuPUhQntsv_zXSrQJrKHke_lfwfIZoLhb4fN36PQFwuEk_RJ72ze5-Bzw5cJO.jpg?size=100x0&quality=96&crop=0,0,996,996&ava=1",
                    photo_200:
                        "https://sun9-62.userapi.com/s/v1/ig2/oFd1h9I8c0nNWVI90-tqvef5JYNCP3Ql-0-4y6juYceHg6IhArKsoPWtxWPJToYeje4feOE9e0N3Ziw42qrgNvu-.jpg?size=200x0&quality=96&crop=0,0,996,996&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661198848000,
                numberOfParticipants: 45,
                title: "Незабудка ",
                key: "AJQ1d1NMDyGpwntfsbPWp7Yr",
                update: 1661199175259,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-55.userapi.com/s/v1/ig2/5PpM-ihLr4yOoh6tYiaC-nDSShM55kMBm57VjkoC5uiPyAWghDgy77LixOkLgqOFSa6FZvsGDO9kFHGbWemtqqTO.jpg?size=50x50&quality=95&crop=480,204,546,546&ava=1",
                    photo_100:
                        "https://sun9-55.userapi.com/s/v1/ig2/Xp1UgLYisNgj-BmQDopkxm8z_zvcImZw6k-Ei2o4O34NttQdKzE1E_Gx_M8V4O4eONmpZ8k6RfFW2NUGy77L9Ri2.jpg?size=100x100&quality=95&crop=480,204,546,546&ava=1",
                    photo_200:
                        "https://sun9-55.userapi.com/s/v1/ig2/dD-WHrj7sq6BuZt0iyp53EVSR72oxvaV1x0BG7f4BHM6rdGtb_6Bo80woW0LcMxXfhN1AKjERV6Ke75zGIxWAZGR.jpg?size=200x200&quality=95&crop=480,204,546,546&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661198997000,
                numberOfParticipants: 3,
                title: "Беседка Фортуны",
                key: "8ZHZvQLqpbjZ5ZAPr1ATZ68gfTVz0xwE_Mc=",
                update: 1661199175259,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-68.userapi.com/s/v1/ig2/LZF__q3BB40wWwQFHXb_91M9MjgPavTM_Zs19HVd5sep7Ns4UR76kLtHyvN_Irzoczhnx8lxjkIQJxgud7MdO5xf.jpg?size=50x50&quality=95&crop=2,2,1078,1078&ava=1",
                    photo_100:
                        "https://sun9-68.userapi.com/s/v1/ig2/qPzsSCqk8C6bLTkInwsUmKIYdcIdl_oKziOQWRkabISlIcffU7oE6AapyhoLER1WVudh0S9TOAja6mwVObVK5IVv.jpg?size=100x100&quality=95&crop=2,2,1078,1078&ava=1",
                    photo_200:
                        "https://sun9-68.userapi.com/s/v1/ig2/q3NtW87MmsGRL5AnqRjsusJ4UOrrikc9lmwLZCd6BG8rKHb2G5uV2n-ZJhAD9BxZHKJtACtQ5XofwW_jXNguH9dg.jpg?size=200x200&quality=95&crop=2,2,1078,1078&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661198528000,
                numberOfParticipants: 7,
                title: "Уголок Маерса",
                key: "AJQ1dxHdqCIkUpv92PSfpL4x",
                update: 1661199175259,
            },
            {
                photo: {
                    photo_50:
                        "https://sun9-83.userapi.com/s/v1/ig2/RZCNuMO-2I4rRQtQrhc_E1L4LMMMm5ToNrBC9jL2_GNB7dniwlSugHf-5uqxRyH1_1ctky5-i230qPiT-qEZdY6-.jpg?size=50x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_100:
                        "https://sun9-83.userapi.com/s/v1/ig2/Oqr0I1GZfgyPbolNx0gbJKdtgGI2V5lTaT0OTezfHVUxPJRRU_P96oTHngbmlTjEJyGzes7is4-E_cgxyJQp-e_x.jpg?size=100x0&quality=96&crop=0,0,992,992&ava=1",
                    photo_200:
                        "https://sun9-83.userapi.com/s/v1/ig2/kTsuzfH0w2x_EIgHvEucTmC2kQflpHuYjwaO7gChNuI-UYCRZLb5UmkHCOQu3ndlGB5V2A3gRa0s7ehcMev-dZ7K.jpg?size=200x0&quality=96&crop=0,0,992,992&ava=1",
                    is_default_photo: false,
                },
                dateOfPublication: 1661198582000,
                numberOfParticipants: 3,
                title: "7treasure | ФАН БЕСЕДА 🔥",
                key: "AJQ1d19coyJduohwdF08QOQE",
                update: 1661199175259,
            },
        ],
    };
};

const Chat = ({ chat }: { chat: IChat }): JSX.Element => {
    const avatar =
        chat.photo === null ? (
            <InitialsAvatar
                size={36}
                gradientColor={calcInitialsAvatarColor(chat.dateOfPublication)}
            >
                {chat.title
                    .split(" ")
                    .map((x) => x[0])
                    .slice(0, 2)
                    .join("")}
            </InitialsAvatar>
        ) : (
            <Avatar size={36} src={chat.photo.photo_200} />
        );

    return (
        <RichCell
            before={avatar}
            disabled
            caption={
                <div>
                    {`Добавлена: ${moment(chat.dateOfPublication).format(
                        "DD.MM.YYYY HH:mm:ss"
                    )}`}
                    <br />
                    {`Обновлено: ${moment(chat.update).format(
                        "DD.MM.YYYY HH:mm:ss"
                    )}`}
                </div>
            }
            afterCaption={`${chat.numberOfParticipants} участников`}
            actions={
                <ButtonGroup mode="horizontal" gap="s" stretched>
                    <Button mode="primary" size="s">
                        Открыть
                    </Button>
                    <Button mode="secondary" size="s">
                        Скопировать ссылку
                    </Button>
                </ButtonGroup>
            }
        >
            {chat.title}
        </RichCell>
    );
};

const VKConversations = (): JSX.Element => {
    const [searchFilter, setSearchFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentChats, setCurrentChats] = useState<IChat[]>([]);

    const description = (
        <>
            Работает при помощи{" «"}
            <Link target="_blank" href="https://vk.com/club215201153">
                ПоискЧата
            </Link>
            {"» "}
            (автор{" "}
            <Link target="_blank" href="https://vk.com/id378585349">
                Александр Стояк
            </Link>
            )
        </>
    );

    const pagination = (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
                currentPage={currentPage}
                onChange={(page): void => setCurrentPage(page)}
            />
        </div>
    );

    useEffect(() => {
        void getConversations().then((res) => setCurrentChats(res.chats));
    }, []);

    return (
        <Group description={description}>
            <Search
                placeholder={"Поиск"}
                value={searchFilter}
                onChange={(event): void => {
                    setSearchFilter(event.target.value);
                }}
            />
            {pagination}
            {currentChats.map((chat) => (
                <Chat chat={chat} />
            ))}
            {pagination}
        </Group>
    );
};

export default VKConversations;
