import Card from './card';

export default function AboutCard({ name, role, bio, pic, links } : { name: string, role: string, bio: string, pic?: string, links?: Array<Record<string, string>> }) {
    return (
        <Card titleText={name} subtitleText={role} descriptionText={bio}  image={pic || '/img/profile-pic-default.jpg'} links={links} />
    )
}