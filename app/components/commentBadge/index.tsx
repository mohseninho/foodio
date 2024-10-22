interface props {
    badge: string;
}
export default function CommentBadge({ badge }: props) {
    return (
        <div className="text-xs text-gray-800 bg-gray-100 rounded-lg flex justify-center items-center gap-1 px-2 py-2">
            {badge}
        </div>
    );
}
