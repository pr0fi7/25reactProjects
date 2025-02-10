import { createContext, useState, useEffect } from "react";
import featureApiCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagState({children}) {
    const [enabledFeatures, setEnabledFeatures] = useState({});
    const [loading, setLoading] = useState(false);

    async function fetchFeatures() {
        try {
            setLoading(true);
            const response = await featureApiCall();
            setEnabledFeatures(response);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            throw new Error(error);
        }
    }

    useEffect(() => {
        fetchFeatures();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{enabledFeatures, loading}}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

