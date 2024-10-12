import ProjectsJson from "@/data/projects.json";
import { Project } from "@/types/type";
import sharp from 'sharp';

const ProjectsData: Project[] = ProjectsJson;

async function getImageInfo(imagePath: string): Promise<{width: number, height: number}> {
    console.log(imagePath);
    try {
        const metadata = await sharp(imagePath).metadata();
        return ({width: metadata.width || 0, height: metadata.height || 0});
    } catch (error) {
        throw new Error("Failed to load image: " + error);
    }
}

async function recalculate() {
    for (const project of ProjectsData) {
        for (const imageDetail of project.imageDetails) {
            const {width, height} = await getImageInfo(`public/img/projects/optimized/${project.slug}/${imageDetail.img}`);
            imageDetail.width = width;
            imageDetail.height = height
            imageDetail.type = width > height ? 0 : 1;
        }
    }

    // write the new data back to the file
    const fs = require('fs');
    fs.writeFileSync('data/projects-new.json', JSON.stringify(ProjectsData, null, 4));
}

recalculate();