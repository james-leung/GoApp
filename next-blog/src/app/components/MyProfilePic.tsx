import Image from "next/image";

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            {/* <img src="/images/profile-photo.png" alt="james leung" /> */}
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/profile-photo-300.png"
                width={300}
                height={300}
                alt="James Leung"
                priority={true}
            />
        </section>
    )
}