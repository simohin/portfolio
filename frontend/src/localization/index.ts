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
                                work: {
                                    type: 'Remote'
                                },
                                employment: 'Full-time',
                            }
                        }
                    }
                },
                experience: {
                    title: 'Work experience',
                    content: {
                        places: {
                            qiwi: {
                                title: 'QIWI',
                                role: 'Product developer',
                                description: 'Research, analyse, developing backend and frontend',
                                dateStart: "07.2022",
                                dateEnd: 'now'
                            },
                            premium: {
                                title: 'Premium IT Solution',
                                role: 'Senior backend developer',
                                description: 'Large distributed human resources platform development for PAO Sberbank',
                                dateStart: "03.2022",
                                dateEnd: "10.2022"
                            },
                            luxoft: {
                                title: 'Luxoft',
                                role: 'Java/Kotlin developer',
                                description: 'Backend development for enterprise clients, business functional research and planning, junior colleagues mentoring, interview participating',
                                dateStart: "03.2022",
                                dateEnd: "07.2022"
                            },
                        }

                    }
                },
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
                                work: {type: 'Удалённо'},
                                employment: 'Полный день',
                            }
                        }

                    }
                },
                experience: {
                    title: 'Опыт работы',
                    content: {
                        places: {
                            qiwi: {
                                title: 'АО "Киви"',
                                role: 'Разработчик продуктов',
                                description: 'Исследование, проектирование, разработка backend и frontend приложения. Техническое ревью дизайна, внедрение приложения в инфраструктуру компании вывод до mvp. Кросс-ревью кода с коллегами по команде, исследование арт партнеров и сравнительный анализ для выбора',
                                dateStart: "07.2022",
                                dateEnd: 'по настоящее время'
                            },
                            premium: {
                                title: 'Premium IT Solution',
                                role: 'Старший backend разработчик',
                                description: 'Разработка бэкхенд крупной распределённой системы кадрового учета для ПАО Сбербанк',
                                dateStart: "03.2022",
                                dateEnd: "10.2022"
                            },
                            luxoft: {
                                title: 'Luxoft',
                                role: 'Java/Kotlin разработчик',
                                description: 'Разработка бэкенда приложений, проектирование бизнес функций и планирование внедрений, менторство младших сотрудников и участие в интервью',
                                dateStart: "03.2022",
                                dateEnd: "07.2022"
                            },
                        }

                    }
                },
            }
        }
    },
    lng: "EN",
    fallbackLng: "EN"
})

export default i18n
