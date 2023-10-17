import {HeroSection} from "../../сomponent/section/hero";
import {WorkExperienceSection} from "../../сomponent/section/work-experience";
import {BaseLayout} from "../../layout";
import React from "react";

export const Main = () => (
    <BaseLayout>
        <HeroSection/>
        <WorkExperienceSection/>
    </BaseLayout>
)
