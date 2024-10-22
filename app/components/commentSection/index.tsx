import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Comment from "../comment";

export default function CommentSection() {
    return (
        <div>
            <Tabs defaultValue="latest" className="w-full" dir="rtl">
                <div className="w-full h-[45px] flex justify-between items-center">
                    <span className="text-2xl font-bold">نظرات کاربران</span>
                    <TabsList className="w-[300px] h-full">
                        <TabsTrigger value="latest" className="w-full h-full">
                            جدیدترین
                        </TabsTrigger>
                        <TabsTrigger value="related" className="w-full h-full">
                            مرتبط ترین
                        </TabsTrigger>
                    </TabsList>
                </div>
                <div className="mt-8">
                    <TabsContent value="latest">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </TabsContent>
                    <TabsContent value="related">related</TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
