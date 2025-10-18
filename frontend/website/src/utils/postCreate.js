export async function postCreate({setIsSubmitting, formData, url, method}) {
    try {
        setIsSubmitting(true);
        const response = await fetch(url, {
            method: method,
            credentials: 'include',
            body: formData,
        });

        if (!response.ok) {
            const data = await response.json();
            return data;
        }

        return await response.json();
    } catch (error) {
        return null;
    } finally {
        setIsSubmitting(false);
    }
}