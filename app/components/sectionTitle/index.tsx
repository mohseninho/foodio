interface props {
    title: string;
}
export default function SectionTitle({ title }: props) {
    return <h4 className="font-bold text-gray-700 mb-5">{title}</h4>;
}
