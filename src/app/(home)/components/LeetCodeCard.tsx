import Title from "@/components/ui/Title";
import { Link } from "@radix-ui/themes";
import { redirect } from "next/navigation";

// in your component, e.g. components/LeetCodeCard.jsx
export default function LeetCodeCard() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 mb-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-12">
      <Title title="LeetCode Stats"/>
      <img
        src={`https://leetcard.jacoblin.cool/contactanujkurmi?theme=dark&font=sans-serif&ext=heatmap&border_radius=10&hide_border=true`}
        alt="LeetCode Stats"
        className="rounded-xl shadow-lg
        
        "
        onClick={()=>{redirect("https://leetcode.com/contactanujkurmi")}}
      />
    </div>
  );
}
