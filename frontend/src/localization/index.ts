import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        EN: {
            translation: {
                header: {
                    title: 'Timofei Simokhin',
                    field: {
                        label: {
                            theme: 'Dark theme'
                        }
                    }
                },
                hero: {
                    title: 'Full stack developer',
                    bio: {
                        field: {
                            name: {
                                age: 'Age',
                                location: 'Location',
                                email: 'Email',
                                work: {
                                    type: 'Work type'
                                },
                                employment: 'Employment',
                            },
                            value: {
                                location: 'Russia, Yekaterinburg',
                                email: '65sumbox@gmail.com',
                                work: {
                                    type: 'Remote'
                                },
                                employment: 'Full-time',
                            }
                        }
                    }
                }
            }
        },
        RU: {
            translation: {
                header: {
                    title: 'Тимофей Симохин',
                    field: {
                        label: {
                            theme: 'Тёмная тема'
                        }
                    }
                },
                hero: {
                    title: 'Full stack разработчик',
                    bio: {
                        field: {
                            name: {
                                age: 'Возраст',
                                location: 'Местоположение',
                                email: 'Электронная почта',
                                work: {type: 'Формат работы'},
                                employment: 'Тип занятости',
                            },
                            value: {
                                location: 'Россия, Екатеринбург',
                                email: '65sumbox@gmail.com',
                                work: {type: 'Удалённо'},
                                employment: 'Полный день',
                            }
                        }

                    }
                }
            }
        }
    },
    lng: "EN",
    fallbackLng: "EN"
})

export default i18n
