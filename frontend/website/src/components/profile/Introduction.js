import {postCreate} from "@/utils/postCreate";

import ProfileEmpty from "@/components/profile/ProfileEmpty";
import ProfileExists from "@/components/profile/ProfileExists";


import styles from "./Introduction.module.css";
import ProfileForm from "@/components/profile/ProfileForm";
import {profileFields} from "@/constants/formFields";
import {useEffect, useRef, useState} from "react";


function Introduction({profile, setProfile}) {
    const ref = useRef(null);
    const [user, setUser] = useState(profileFields);
    const [profileUser, setProfileUser] = useState(null);

    useEffect(() => {
        if (profile) {
            setUser(
                profileFields.map(field => ({
                    ...field,
                    value: field.type === 'file' ? undefined : profile[field.name] || '',
                }))
            );
        }
    }, [profile]);


    function closeModal({data}) {
        ref.current.close();
        setUser(profileFields.map(field => ({
            ...field,
            value: data[field.name] || '',
        })));

        setProfileUser(data);

        setProfile(prevProfile => ({
            ...prevProfile,
            ...data,
        }));
    }


    function onChange(event) {
        const {name, value, type, files} = event.target;

        setUser((prevUser) =>
            prevUser.map((field) =>
                field.name === name ? {...field, value: type === 'file' ? files[0] : value} : field
            )
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const method = profile ? 'PATCH' : 'POST';
        const url = profile ? `${process.env.NEXT_PUBLIC_API_PROFILE_UPDATE}${profile.id}/`
            : `${process.env.NEXT_PUBLIC_API_PROFILE_CREATE}`;

        const formData = new FormData();

        user.forEach((field) => {
            if (field.value) {
                formData.append(field.name, field.value);
            }
        });

        try {
            const res = await fetch(url, {
                credentials: "include",
                method: method,
                body: formData,
            });
            const data = await res.json();
            closeModal({data});
        } catch (err) {
            console.log(err);
        } finally {

        }
    }

    function handleModal() {
        ref.current.showModal();
    }

    return (
        <div className={`${styles.introduction}`}>
            {profile ? (
                <ProfileExists userProfile={profile}/>
            ) : (
                <ProfileEmpty/>
            )}
            <ProfileForm
                ref={ref}
                profileFields={user}
                onChange={onChange}
                hasProfile={profile}
                handleSubmit={handleSubmit}/>
            <button className={styles.button}
                    onClick={handleModal}>{profile ? "Editar Perfil" : "Criar Perfil"}</button>
        </div>
    );
}

export default Introduction;
