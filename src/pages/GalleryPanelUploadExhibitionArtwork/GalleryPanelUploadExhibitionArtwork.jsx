import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import i18next, { t } from 'i18next';
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import classnames from 'classnames';
import { useDispatch, useSelector } from "react-redux";


import Aydin_Aghdashloo from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg'
import add from '../../assets/img/add.png'
import artwork from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import add_white from '../../assets/img/add-white@2x.png'
import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import edit_name_blue from '../../assets/img/edit_name_blue.svg'
import artwork10 from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import edit_name from '../../assets/img/edit_name.svg'
import change_icon from '../../assets/img/change.png'
import apiServices from "../../utils/api.services";
import { ARTIST_BY_GALLERY, EXHIBITION, EXHIBITION_PRODUCT, GALLERY_ARTISTS } from "../../utils";
import { Form, Input, message, Modal, Button, Spin } from "antd";
import { GetLanguage } from "../../utils/utils";
import MultipleUpload from "../../components/MultiUpload/MultiUpload";
import OneUpload from "../../components/OneUpload/OneUpload";
import queryString from "query-string";
import Collection from "../CollectionsList/Collection";
import ExistArtworkCollection from "./ExistArtworkCollection";
import { useNavigate } from "react-router-dom";
import { exhibitionForm } from "../../redux/reducers/Exhibition/exhibition.action";
import OneUploadCircle from "../../components/OneUploadCircle/OneUploadCircle";

const { TextArea } = Input

function GalleryPanelUploadExhibitionArtwork() {
    const { lastform } = useSelector((state) => state.exhibitionReducer)
    const [selectedArtistId, setSelectedArtistId] = useState(lastform?.artist ? lastform.artist : [])
    const [selectedArtists, setSelectedArtists] = useState([])
    const [selectedArtist, setSelectedArtist] = useState()
    const [showNewArtist, setShowNewArtist] = useState(false)
    const [showSelectArtworkSource, setShowSelectArtworkSource] = useState(false)
    const [showExistArtwork, setShowExistArtwork] = useState(false)
    const [showChangePrice, setShowChangePrice] = useState(false)
    const [uploadList, setUploadList] = useState([])
    const [selectedArtworks, setSelectedArtworks] = useState([])
    const [artworkToChange, setArtworkToChange] = useState({})
    const [artistToChange, setArtistToChange] = useState({})
    const dispatch = useDispatch()
    const { id } = useSelector((state) => state.galleryReducer)
    const { exhibitionId } = useSelector((state) => state.galleryReducer)




    const myObject = [
        {
            "id": 49,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "54yg3tf3",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "35tgf34t3e5tfg3rf4"
                },
                "fa": {
                    "description": null,
                    "biography": "t5fg34rtf3",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "65y54trg54wt34rtf"
                }
            },
            "bg_image": {
                "id": 273,
                "exact_url": "https://box.artibition.gallery/image/82e19432-6996-4662-a37f-dcd41ecb036d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171010Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=141924bf3145edbe1f4f22cc9c3cfd2371c26d52305b1b666b3d8acfc9acbd14",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 1,
                "username": "ffdec502",
                "translations": {
                    "fa": {
                        "first_name": "65y54trg",
                        "last_name": "54wt34rtf"
                    },
                    "en": {
                        "first_name": "35tgf34t",
                        "last_name": "3e5tfg3rf4"
                    }
                },
                "roles": [
                    "seller",
                    "gallery"
                ]
            }
        },
        {
            "id": 45,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "regerg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "regwergreger"
                },
                "fa": {
                    "description": null,
                    "biography": "ergwerg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ergregrefgwe"
                }
            },
            "bg_image": {
                "id": 212,
                "exact_url": "https://box.artibition.gallery/image/c0c75bcb-b948-439d-88ed-32937d882483?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171010Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=1f49515c7d85d3162410a58046e2b25ecee62e38342f90f934b41e7440db16d7",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 68,
                "username": "f9672e57",
                "translations": {
                    "en": {
                        "first_name": "regwer",
                        "last_name": "greger"
                    },
                    "fa": {
                        "first_name": "ergre",
                        "last_name": "grefgwe"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 44,
            "translations": {
                "fa": {
                    "description": null,
                    "biography": "fgreiojisf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "fweffds fd"
                },
                "en": {
                    "description": null,
                    "biography": "we  gwtrhs",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "weerewfd sdfgds"
                }
            },
            "bg_image": {
                "id": 211,
                "exact_url": "https://box.artibition.gallery/image/59f455d5-bbc0-4b6d-9cec-bd54b4c12e00?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171011Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=62f18bc2c948f6143a087f56d7d9e6714b0bb92572461003e2ec5387c0dca9bb",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 67,
                "username": "100d2328",
                "translations": {
                    "en": {
                        "first_name": "weerew",
                        "last_name": "fd sdfgds"
                    },
                    "fa": {
                        "first_name": "fwef",
                        "last_name": "fds fd"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 43,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "ytjhu6trh",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ewdwdweewfcwfw"
                },
                "fa": {
                    "description": null,
                    "biography": "ewdcwefrtyuj",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ewrfewe ewdew"
                }
            },
            "bg_image": {
                "id": 210,
                "exact_url": "https://box.artibition.gallery/image/6705bfbe-df70-43d0-9fa9-1c67af20e650?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171011Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=4d8db9ecfbba47591ca3d94f347c87d05fe7c3092f3427e5ecc7458dc1c02686",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 66,
                "username": "3ea6ae5f",
                "translations": {
                    "en": {
                        "first_name": "ewdwdwe",
                        "last_name": "ewfcwfw"
                    },
                    "fa": {
                        "first_name": "ewrfew",
                        "last_name": "e ewdew"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 42,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "fdgdfg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "sfdsfsdf45r4wr3r"
                },
                "fa": {
                    "description": null,
                    "biography": "fdgfdg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "yujyt trg tr gtr tr grt"
                }
            },
            "bg_image": {
                "id": 209,
                "exact_url": "https://box.artibition.gallery/image/234bf884-1b27-4c8e-bc67-4c39c2059063?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171012Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=68b30c81bdb4524eba17bd886a688644221fc363bcdafb1a0dde4cf452eafff2",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 65,
                "username": "aa3bbeb5",
                "translations": {
                    "en": {
                        "first_name": "sfdsfsdf",
                        "last_name": "45r4wr3r"
                    },
                    "fa": {
                        "first_name": "yujyt",
                        "last_name": " trg tr gtr tr grt"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 41,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "eeeeeee",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "gregvcvcxvcv"
                },
                "fa": {
                    "description": null,
                    "biography": "ewawewewe",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "rtgregerg"
                }
            },
            "bg_image": {
                "id": 208,
                "exact_url": "https://box.artibition.gallery/image/468d6c07-c5e8-410c-a267-3acc3d6327ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171013Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=81604b4d9b4aa707a1bee615a08801e93355e4d199c47be7d24fe0a4a6e4dbd5",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 64,
                "username": "8142794f",
                "translations": {
                    "en": {
                        "first_name": "greg",
                        "last_name": "vcvcxvcv"
                    },
                    "fa": {
                        "first_name": "rtgre",
                        "last_name": "gerg"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 40,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "abc",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "abcabc"
                },
                "fa": {
                    "description": null,
                    "biography": "abc",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "abcabc"
                }
            },
            "bg_image": {
                "id": 207,
                "exact_url": "https://box.artibition.gallery/image/de980c36-b678-4b5f-b7ca-f0277b0f1333?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171013Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=4c4870307d23b4121b4b2986fd1194ee1e999601685f99f33dd5ab08548c2b93",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 63,
                "username": "ad2a57d9",
                "translations": {
                    "en": {
                        "first_name": "abc",
                        "last_name": "abc"
                    },
                    "fa": {
                        "first_name": "abc",
                        "last_name": "abc"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 39,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "121212",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "111111"
                },
                "fa": {
                    "description": null,
                    "biography": "121212",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "111111"
                }
            },
            "bg_image": {
                "id": 206,
                "exact_url": "https://box.artibition.gallery/image/2521b5bd-9a09-41bd-b695-7dfbbe611323?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171014Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=508cb0a3b21a16447d548b4655c525ce8e0df7e5c690fd2aa8996ee57ec8fe25",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 62,
                "username": "654113c9",
                "translations": {
                    "en": {
                        "first_name": "111",
                        "last_name": "111"
                    },
                    "fa": {
                        "first_name": "111",
                        "last_name": "111"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 38,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "regreg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "refgreregfre"
                },
                "fa": {
                    "description": null,
                    "biography": "regerg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "fdgfgergfre"
                }
            },
            "bg_image": {
                "id": 205,
                "exact_url": "https://box.artibition.gallery/image/d03dd759-716f-4254-8471-4e15e3c4d98c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171014Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=e380a00ccefe9c4c6a53124cc5a9298873d4b1b7d4f3ccb068297bac54f791a5",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 61,
                "username": "3736079c",
                "translations": {
                    "fa": {
                        "first_name": "fdgf",
                        "last_name": "gergfre"
                    },
                    "en": {
                        "first_name": "refgre",
                        "last_name": "regfre"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 35,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "refgre",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "refgerregfre"
                },
                "fa": {
                    "description": null,
                    "biography": "regfer",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "referrefgre"
                }
            },
            "bg_image": {
                "id": 134,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171015Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=7d655619326bb2fdfd41c20f003358c376973d7918ec5ea180de259029fb1cc9",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 55,
                "username": "d57ff97c",
                "translations": {
                    "en": {
                        "first_name": "refger",
                        "last_name": "regfre"
                    },
                    "fa": {
                        "first_name": "refer",
                        "last_name": "refgre"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 34,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "tyrhty",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "rtyhryh"
                },
                "fa": {
                    "description": null,
                    "biography": "tyhrty",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ytrhtytrh"
                }
            },
            "bg_image": {
                "id": 133,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171016Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=0ff9ef66c0b45d7a63cc91e66acaea405fa9ab75597ba1c079c6b739981660be",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 54,
                "username": "8e47357b",
                "translations": {
                    "en": {
                        "first_name": "rtyh",
                        "last_name": "ryh"
                    },
                    "fa": {
                        "first_name": "ytrht",
                        "last_name": "ytrh"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 33,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "trhrtdh",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ersfergtrsg"
                },
                "fa": {
                    "description": null,
                    "biography": "rthdrth",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "trgrthrt"
                }
            },
            "bg_image": {
                "id": 132,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171016Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=0ff9ef66c0b45d7a63cc91e66acaea405fa9ab75597ba1c079c6b739981660be",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 53,
                "username": "95bdaa7d",
                "translations": {
                    "en": {
                        "first_name": "ersfer",
                        "last_name": "gtrsg"
                    },
                    "fa": {
                        "first_name": "trgrt",
                        "last_name": "hrt"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 32,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "erfref",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "referefe"
                },
                "fa": {
                    "description": null,
                    "biography": "erf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "erfref"
                }
            },
            "bg_image": {
                "id": 131,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171017Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=33d29783e2abb997df727552b6dd6a7611699e653efa3fcbcc1f880f678be264",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 52,
                "username": "0a111d3a",
                "translations": {
                    "en": {
                        "first_name": "refe",
                        "last_name": "refe"
                    },
                    "fa": {
                        "first_name": "erf",
                        "last_name": "ref"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 31,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "wdwq",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "wqdwqd"
                },
                "fa": {
                    "description": null,
                    "biography": "qwdqw",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "asdewewqd"
                }
            },
            "bg_image": {
                "id": 130,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171018Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=7aaead30a6307452e1e4dbe0a25a0059ff60403c2c11246d999d0515ccf9a6b8",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 51,
                "username": "5629bab8",
                "translations": {
                    "en": {
                        "first_name": "wqd",
                        "last_name": "wqd"
                    },
                    "fa": {
                        "first_name": "asdew",
                        "last_name": "ewqd"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 30,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "rtgrt",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "trgtrg"
                },
                "fa": {
                    "description": null,
                    "biography": "trg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "rtgtrg"
                }
            },
            "bg_image": {
                "id": 129,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171018Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=7aaead30a6307452e1e4dbe0a25a0059ff60403c2c11246d999d0515ccf9a6b8",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 50,
                "username": "ae9465e6",
                "translations": {
                    "en": {
                        "first_name": "trg",
                        "last_name": "trg"
                    },
                    "fa": {
                        "first_name": "rtg",
                        "last_name": "trg"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 29,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "erger",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "refgrefg"
                },
                "fa": {
                    "description": null,
                    "biography": "reg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "refrefg"
                }
            },
            "bg_image": {
                "id": 128,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171019Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=1efb96f89b2ca4744ac3a6ff1e55aba6449b504fa76632703721a301762a082b",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 49,
                "username": "6bd2cf81",
                "translations": {
                    "en": {
                        "first_name": "refg",
                        "last_name": "refg"
                    },
                    "fa": {
                        "first_name": "ref",
                        "last_name": "refg"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 28,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "ewf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ewfewf"
                },
                "fa": {
                    "description": null,
                    "biography": "ewfew",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ewrfewrf"
                }
            },
            "bg_image": {
                "id": 127,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171019Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=1efb96f89b2ca4744ac3a6ff1e55aba6449b504fa76632703721a301762a082b",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 48,
                "username": "6cad0527",
                "translations": {
                    "en": {
                        "first_name": "ewf",
                        "last_name": "ewf"
                    },
                    "fa": {
                        "first_name": "ewrf",
                        "last_name": "ewrf"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 27,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "refg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "erfgrefger"
                },
                "fa": {
                    "description": null,
                    "biography": "refgre",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "retfgrefger"
                }
            },
            "bg_image": {
                "id": 126,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171020Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=c8d4804ba09106e64e77c14f745995a3e275be072890227342e6c1f562e850c7",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 47,
                "username": "7d0f9993",
                "translations": {
                    "en": {
                        "first_name": "erfg",
                        "last_name": "refger"
                    },
                    "fa": {
                        "first_name": "retfg",
                        "last_name": "refger"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 26,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "ewffd",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "dsffdsf"
                },
                "fa": {
                    "description": null,
                    "biography": "fwef",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "dsfdsf"
                }
            },
            "bg_image": {
                "id": 125,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171020Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=c8d4804ba09106e64e77c14f745995a3e275be072890227342e6c1f562e850c7",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 46,
                "username": "73ae2ca7",
                "translations": {
                    "en": {
                        "first_name": "dsf",
                        "last_name": "fdsf"
                    },
                    "fa": {
                        "first_name": "dsf",
                        "last_name": "dsf"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 25,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "asfdasdf"
                },
                "fa": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ewrtwerqwererw"
                }
            },
            "bg_image": {
                "id": 124,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171021Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=1b821d54ed8070ad0dc315100d9991153bf8a000a9fa6a27e2c76e6f49938f86",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 45,
                "username": "1c77db25",
                "translations": {
                    "en": {
                        "first_name": "asfd",
                        "last_name": "asdf"
                    },
                    "fa": {
                        "first_name": "ewrtwer",
                        "last_name": "qwererw"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 24,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "asfd",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "asdfasdf"
                },
                "fa": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "awertfwafsdf"
                }
            },
            "bg_image": {
                "id": 123,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171022Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=98ce0d7a39c5674cb7757a3112ff4c365b93ff5bddb9624e3cc9856758f26a81",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 44,
                "username": "20fb4492",
                "translations": {
                    "en": {
                        "first_name": "asdf",
                        "last_name": "asdf"
                    },
                    "fa": {
                        "first_name": "awertfw",
                        "last_name": "afsdf"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 23,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "fasdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "asfddasdf"
                },
                "fa": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "fcAsdfsdfadf"
                }
            },
            "bg_image": {
                "id": 122,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171022Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=98ce0d7a39c5674cb7757a3112ff4c365b93ff5bddb9624e3cc9856758f26a81",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 43,
                "username": "b9ed75f3",
                "translations": {
                    "en": {
                        "first_name": "asfdd",
                        "last_name": "asdf"
                    },
                    "fa": {
                        "first_name": "fcAsdf",
                        "last_name": "sdfadf"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 22,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ewf4"
                },
                "fa": {
                    "description": null,
                    "biography": "dg",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "frfrwe"
                }
            },
            "bg_image": {
                "id": 121,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171023Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=a09c2ca654e09a990f06d546ff041c1d3e490726bf77cf9c43fd541a1d910870",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 42,
                "username": "22f34c7c",
                "translations": {
                    "en": {
                        "first_name": "ewf",
                        "last_name": "4"
                    },
                    "fa": {
                        "first_name": "f",
                        "last_name": "rfrwe"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 21,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "asdfasdf"
                },
                "fa": {
                    "description": null,
                    "biography": "asdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "sdfadfasdfs"
                }
            },
            "bg_image": {
                "id": 120,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171023Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=a09c2ca654e09a990f06d546ff041c1d3e490726bf77cf9c43fd541a1d910870",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 41,
                "username": "c7f55968",
                "translations": {
                    "en": {
                        "first_name": "asdf",
                        "last_name": "asdf"
                    },
                    "fa": {
                        "first_name": "sdfadf",
                        "last_name": "asdfs"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 20,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "asdfsad",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "rfwerf4"
                },
                "fa": {
                    "description": null,
                    "biography": "asdfa",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "1rfrwe"
                }
            },
            "bg_image": {
                "id": 119,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171024Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=e903520f27c07491f90782cb1582be5222d8e22a26c3fdeece3a0482291cbc1d",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 40,
                "username": "a8e36e05",
                "translations": {
                    "en": {
                        "first_name": "rfwerf",
                        "last_name": "4"
                    },
                    "fa": {
                        "first_name": "1",
                        "last_name": "rfrwe"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 19,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "h",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "3dsf"
                },
                "fa": {
                    "description": null,
                    "biography": "huj",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "dsafewsdfds"
                }
            },
            "bg_image": {
                "id": 118,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171025Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=39706b14496c317f2ff57ab5f844d3c02889ca787beb22a173da7bbc45dc429b",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 39,
                "username": "7582c365",
                "translations": {
                    "en": {
                        "first_name": "3",
                        "last_name": "dsf"
                    },
                    "fa": {
                        "first_name": "dsafew",
                        "last_name": "sdfds"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 18,
            "translations": {
                "en": {
                    "description": null,
                    "biography": "rytr5",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "fefe"
                },
                "fa": {
                    "description": null,
                    "biography": "ryrt",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": "ffdfef"
                }
            },
            "bg_image": {
                "id": 117,
                "exact_url": "https://box.artibition.gallery/image/1a9daf02-55db-407c-a2af-952d4f8ee8ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tWOIUmnUCjIXjHX8sMq0%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220207T171025Z&X-Amz-Expires=25200&X-Amz-SignedHeaders=host&X-Amz-Signature=39706b14496c317f2ff57ab5f844d3c02889ca787beb22a173da7bbc45dc429b",
                "bucket_name": "image",
                "is_default": null
            },
            "owner": {
                "id": 38,
                "username": "2b160290",
                "translations": {
                    "en": {
                        "first_name": "fe",
                        "last_name": "fe"
                    },
                    "fa": {
                        "first_name": "ffd",
                        "last_name": "fef"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 4,
            "translations": {
                "en": {
                    "description": "",
                    "biography": "",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": "",
                    "statement": "",
                    "nick_name": null
                }
            },
            "bg_image": null,
            "owner": {
                "id": 16,
                "username": "b2917a67",
                "translations": {},
                "roles": []
            }
        },
        {
            "id": 3,
            "translations": {
                "fa": {
                    "description": null,
                    "biography": null,
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": null
                },
                "en": {
                    "description": null,
                    "biography": null,
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": null
                }
            },
            "bg_image": null,
            "owner": {
                "id": 5,
                "username": "bf44f9e7",
                "translations": {
                    "fa": {
                        "first_name": "علی",
                        "last_name": "علس"
                    }
                },
                "roles": []
            }
        },
        {
            "id": 2,
            "translations": {
                "en": {
                    "description": null,
                    "biography": null,
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": null
                },
                "fa": {
                    "description": null,
                    "biography": "dfdsf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": null
                }
            },
            "bg_image": null,
            "owner": null
        },
        {
            "id": 1,
            "translations": {
                "fa": {
                    "description": null,
                    "biography": "fsdfsd",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": null,
                    "statement": null,
                    "nick_name": null
                },
                "en": {
                    "description": "",
                    "biography": "fsdfsdf",
                    "teachers": null,
                    "atelier_publisher": null,
                    "about_me": "",
                    "statement": "",
                    "nick_name": null
                }
            },
            "bg_image": null,
            "owner": {
                "id": 4,
                "username": "5505916b",
                "translations": {
                    "fa": {
                        "first_name": "تست",
                        "last_name": "تستی"
                    },
                    "en": {
                        "first_name": "test",
                        "last_name": "testi"
                    }
                },
                "roles": [
                    "seller",
                    "gallery",
                    "artist"
                ]
            }
        }
    ]




    const [chosenList, setChosenList] = useState([])
    const [changePriceForm] = Form.useForm()


    const [params, setParams] = useState({
        page_size: 9999999
    })

    const [form] = Form.useForm()
    const navigate = useNavigate()


    // useEffect(() => {
    //     console.log(selectedArtworks);
    // }, [selectedArtworks])


    // useEffect(() => {
    //     console.log(selectedArtistId);
    // }, [selectedArtistId])


    const sendData = () => {
        let temp = []
        selectedArtworks.map((item, index) => {
            temp.push(...item.selected)
        })
        lastform["product"] = temp
        apiServices.post(EXHIBITION(id), lastform)
            .then(res => {
                if (res.data) {
                    console.log(res.data.data);
                }
                else {
                    message.error(res.response.data.message)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }



    const getExhibitionProduct = () => {
        apiServices.get(EXHIBITION_PRODUCT(id, exhibitionId), queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    // console.log(res.data.data.results);
                    const result = res.data.data.results
                    const temp = []
                    const artistsTemp = []
                    result.map((item) => {
                        const data = {}
                        data["id"] = item.id;
                        data["selected"] = []
                        artistsTemp.push(item.id);
                        item.product_item.map((product) => {
                            data.selected.push({
                                product_id: product.product.id,
                                product_item_id: product.id,
                                reserved_dollar_price: product.reserved_dollar_price,
                                reserved_toman_price: product.reserved_toman_price
                            })
                        })
                        temp.push(data)
                    })
                    // console.log(temp);
                    // console.log("IIIDDDD", artistsTemp);
                    setSelectedArtworks(temp)
                    // console.log(myObject);
                    setSelectedArtistId(artistsTemp)

                    // setSelectedArtworks()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }




    const getGalleryArtists = () => {
        apiServices.get(GALLERY_ARTISTS(id), queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    let filter = []
                    // console.log(res.data.data.results);
                    res.data.data.results.map((item) => {
                        if (selectedArtistId.includes(item.id)) {
                            filter.push(item)
                        }
                    })
                    setSelectedArtists(filter);
                } else {
                    message.error(res.response.data.message)
                }

            })
            .catch((err) => {
                console.error(err);
            });
    }






    useEffect(() => {
        getExhibitionProduct()
        getGalleryArtists()
    }, [])


    useEffect(() => {
        console.log(selectedArtists)
    }, [selectedArtists])

    useEffect(() => {
        console.log(selectedArtworks);
    }, [selectedArtworks])



    const submitSelectedArtwork = () => {
        // setSelectedArtworks(ttemp)
    }


    const onFinishNewArtist = (value) => {
        if (uploadList.length > 0) {
            const payload = {
                "translations": {
                    "en": {
                        "biography": value.bio_en,
                        "first_name": value.name_en,
                        "last_name": value.family_en,
                    },
                    "fa": {
                        // "biography": value.bio_fa ? value.bio_fa : null,
                        // "first_name": value.name_fa ? value.name_fa : null,
                        // "last_name": value.family_fa ? value.family_fa : null,
                        "biography": value.bio_fa ? value.bio_fa : value.bio_en,
                        "first_name": value.name_fa ? value.name_fa : value.name_en,
                        "last_name": value.family_fa ? value.family_fa : value.family_en,
                    }
                },
                "bg_image": {
                    "media_path": uploadList[0].media_path,
                    "file_key": uploadList[0].file_key,
                    "type": "image",
                    "bucket_name": "image"
                }
            }


            apiServices.post(ARTIST_BY_GALLERY(id), payload)
                .then(res => {
                    if (res.data) {
                        lastform?.artist?.push(res.data.data.id)
                        dispatch(exhibitionForm(lastform))
                        setSelectedArtists([...selectedArtists, res.data.data])
                        setSelectedArtistId([...selectedArtistId, res.data.data.id])
                        setUploadList([]);
                        form.resetFields();
                        setShowNewArtist(false)
                    } else {
                        message.error(res.response.data.message)
                    }

                })
        } else {
            message.error({
                content: t("add-new-artist-by-gallery.upload_avatar_error"), style: {
                    marginTop: '110px',
                },
            })
        }
    }


    const changePriceFinish = (form) => {
        let temp = selectedArtworks

        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === artistToChange.id) {
                for (let j = 0; j < temp[i].selected.length; j++) {
                    const element = temp[i].selected[j];
                    if (element.product_id === artworkToChange.product_id && element.product_item_id === artworkToChange.product_item_id) {
                        element.reserved_dollar_price = form.dollarPrice
                        element.reserved_toman_price = form.tomanPrice
                    }
                }
            }
        }
        // console.log(temp);
        setSelectedArtworks(temp)
    }


    return (
        <div>
            <div className="container container-fixed">
                <HeaderPanel t={t} />
                <div className="upload-exhibition-artist mrgt125">
                    <h2 className="default-title aligncenter">{t("upload-exhibition-artwork.title")}</h2>
                    {
                        console.log("selectedArtists", selectedArtists)
                    }
                    {selectedArtists.map((artist, artistIndex) => {
                        // console.log(selectedArtists);
                        return (
                            <div className=" artist-upload-row">
                                <div className="artist-name-row">
                                    <div className="artist-avatar pull-dir">
                                        <img className="img-responsive" src={artist.bg_image?.exact_url} height="192" width="192" alt="" />
                                    </div>
                                    <h4 className="artists-name text-dir">
                                        <span>
                                            {i18next.language === 'fa-IR' ?
                                                artist.translations?.fa?.nick_name :
                                                artist.translations?.en?.nick_name}
                                        </span>
                                    </h4>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row dir">
                                    {
                                        console.log("selectedArtworks", selectedArtworks)
                                    }
                                    {
                                        selectedArtworks.map((artwork, artworkIndex) => {
                                            // console.log("AAAAAAAAA",selectedArtists);

                                            if (artwork.id === artist.id) {
                                                {
                                                    return (
                                                        artwork.selected.map((showArtwork, showArtworkIndex) => {
                                                            return (
                                                                <div className="cols" tabIndex="-1" style={{ padding: "0 5px", cursor: "unset" }}>
                                                                    <div className="col-img">
                                                                        <div className="tags tags-off persian-num">30 %</div>
                                                                        <img src="/static/media/hnrpqkfiup@3x.27cdebb9.jpg" width="200" height="200" alt="آرتیبیشن" className="img-responsive" />
                                                                    </div>
                                                                    <div className="col-body text-dir dir">
                                                                        <h6 className="col-title">
                                                                            <span className="col-name">آیدین</span>
                                                                            <span className="col-name">آغداشلو</span>
                                                                        </h6>
                                                                        <div className="col-dimension">
                                                                            <span className="col-dimension-title">ابعاد:</span>
                                                                            <span className="col-dimension-body">
                                                                                <span className="dimension-width">60</span>
                                                                                <span> در </span>
                                                                                <span className="dimension-height">60</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-price">
                                                                            <span className="col-price-num">22.000.000</span>
                                                                            <span className="col-price-unit">تومان</span>
                                                                            <span className="edit-price" data-toggle="modal" data-target="modal-edit-price" style={{ cursor: "pointer" }} onClick={() => {
                                                                                setArtistToChange(artist)
                                                                                setArtworkToChange(showArtwork)
                                                                                changePriceForm.resetFields()
                                                                                setShowChangePrice(true)
                                                                            }}
                                                                            >
                                                                                <img src="/static/media/edit_name.952e3f26.svg" width="32" height="32" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    )
                                                }
                                            }
                                        })}

                                    <div>
                                        <button style={{ width: "200px", height: "200px" }} className="artist-upload addbtn" onClick={() => {
                                            setShowSelectArtworkSource(true)
                                            setSelectedArtist(artist.id)
                                        }}>
                                            <img src={add} width="36" height="36" alt="" className="img-responsive" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                    <button type="button" className="btn-add-artist" onClick={() => { setShowNewArtist(true) }}>
                        <img src={add_white} width="24" height="24" alt="" className="img-responsive" />
                        <span>{t("upload-exhibition-artwork.new_artist")}</span>
                    </button>
                    <div className="adv-btn" style={{ backgroundColor: "white" }}>
                        <div className="container">
                            <button type="button" className="btn-next pull-dir-rev" onClick={() => { sendData() }}>{t("upload-exhibition-artwork.confirm_gallery_info")}</button>
                        </div>
                    </div>
                </div>





                <Modal
                    visible={showNewArtist}
                    width={800}
                    footer={[]}
                    destroyOnClose={true}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowNewArtist(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="enter-address">
                                <div className="row-addaddress">
                                    <h3 className="addressform-title text-dir">{t("gallery-panel-create-exhibition.add_new_artist.upload_artist_picture")}</h3>
                                </div>
                                <OneUploadCircle uploadList={uploadList} setUploadList={setUploadList} />
                                <Form form={form} name="add_new_artist"
                                    onFinish={onFinishNewArtist}
                                    className="row dir">
                                    <h3 className="addressform-title text-dir w-100" >{t("gallery-panel-create-exhibition.add_new_artist.artist_info")}</h3>
                                    <br />
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"name_fa"}>
                                                <Input required={GetLanguage() === 'fa-IR' ? true : false} className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"family_fa"}>
                                                <Input required={GetLanguage() === 'fa-IR' ? true : false} className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group en">
                                            <Form.Item name={"name_en"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group en ">
                                            <Form.Item name={"family_en"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className={classnames("", {
                                        "col-sm-12": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group ">
                                            <Form.Item name={"bio_fa"}>
                                                <TextArea required={GetLanguage() === 'fa-IR' ? true : false} rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="public-group en">
                                            <Form.Item name={"bio_en"}>
                                                <TextArea required rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <Button htmlType="submit" className="btn btn-black">{t("gallery-panel-create-exhibition.add_new_artist.confirm_btn")}</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>

                    </div>
                </Modal>



                <Modal visible={showSelectArtworkSource}
                    width={800}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowSelectArtworkSource(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="adv-btn" style={{ flexDirection: "column" }}>
                                <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal" onClick={() => { setShowExistArtwork(true) }}>
                                    انتخاب از آثار موجود
                                </button>
                                <button type="button" className="btn-black center-block mrgt16" data-target="#modal-import { useLocation } from 'react-router-dom';edit-price" data-toggle="modal" onClick={() => {
                                    navigate({
                                        pathname: '/panel/add-artwork',
                                        search: `?artist_id=${selectedArtist}&back=/panel/upload-exhibition-artwotk`,
                                    });
                                }}>
                                    افزودن اثر جدید
                                </button>
                            </div>
                        </div>

                    </div>
                </Modal>





                <Modal visible={showExistArtwork}
                    width={"100vw"}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowExistArtwork(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="container">
                                {selectedArtists.map((artist, index) => {
                                    // console.log(index, artist);
                                    return (
                                        <div className="exist-artwork-row">
                                            <div className="artist-name-row">
                                                <div className="artist-avatar pull-right">
                                                    <img className="img-responsive" src="img/Aydin_Aghdashloo_04@3x.jpg" height="192" width="192" alt="" />
                                                </div>
                                                <h4 className="artists-name">
                                                    <span>آیدین</span>
                                                    <span>آغداشلو</span>
                                                </h4>
                                            </div>
                                            <div className="artist-artworks-row advisory-select">
                                                <ExistArtworkCollection artistID={artist.id} selectedArtwork={selectedArtworks} setSelectedArtwork={setSelectedArtworks} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="adv-btn" style={{ backgroundColor: "white" }}>
                                <div className="container">
                                    <button type="button" className="btn-next pull-left" onClick={() => {
                                        submitSelectedArtwork()
                                    }}>تایید و ادامه</button>
                                    <div className="selected-artwork pull-left">
                                        <span className="persian-num">5</span>
                                        <span>اثر<span className="hidden-xs"> انتخاب شد</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>


                <Modal
                    visible={showChangePrice}
                    width={"800px"}
                    footer={[]}>

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">تغییرات قیمت</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowChangePrice(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <Form name="changePrice"
                                onFinish={changePriceFinish}
                                form={changePriceForm}>
                                <div className="container w-100">
                                    <div className="block-artworks">
                                        <img src={artwork10} width="840" height="840" alt="" className="img-responsive center-block" />
                                        <h6 className="col-title" style={{ justifyContent: "center" }}>
                                            <span className="col-name">آیدین</span>
                                            <span className="col-name">آغداشلو</span>
                                        </h6>
                                        <span>بدون عنوان</span>
                                    </div>
                                    <div className="block-edit-price dir text-dir">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label className="lable-checkbox public-group">
                                                    <input type="checkbox" value="" />
                                                    <span>برای نمایش</span>
                                                    <span className="checkmark"></span>
                                                    <span className="input-help" style={{ position: "block", top: "25px" }}>با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار می‌گیرد</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: "40px" }}>
                                            <div className="col-sm-6">
                                                <div className="public-group">
                                                    <Form.Item name={"tomanPrice"}>
                                                        <Input className="form-control input-public persian-num " placeholder="قیمت اثر با تومان" defaultValue={artworkToChange.reserved_toman_price} />
                                                    </Form.Item>
                                                </div>
                                                <a href="#" className="btn-change">
                                                    <img src={change_icon} width="24" height="24" alt="" className="" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="public-group">
                                                    <Form.Item name={"dollarPrice"}>
                                                        <Input className="form-control input-public persian-num " placeholder="قیمت اثر با دلار" defaultValue={artworkToChange.reserved_dollar_price} />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer" style={{ flexDirection: "column", padding: "0 15px" }}>
                                    <Form.Item>
                                        <Button htmlType="submit" className="btn btn-black" onClick={() => { setShowChangePrice(false) }}>ثبت تغییرات</Button>
                                    </Form.Item>
                                    <span style={{ margin: "10px 0" }}>تغییرات قیمتی شما در مدت برگزاری نمایشگاه باقی خواهد ماند</span>
                                </div>
                            </Form>
                        </div>

                    </div>

                </Modal>


            </div>
            <BasketFooterPanelNoBox />
        </div>
    )
}

export default GalleryPanelUploadExhibitionArtwork