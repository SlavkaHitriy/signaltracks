import { Sidebar } from '@/components/Sidebar';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Settings } from '@/modules/Settings/index.js';
import { AssetMapView } from '@/modules/AssetMapView/index.js';
import { AssetListing } from '@/modules/AssetListing/index.js';
import { Asset } from '@/modules/Asset/index.js';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('auth') && <Sidebar />}
            <div className={'app-inner'}>
                <main className={'main'}>
                    <Routes>
                        <Route path='/asset-mapview' element={<AssetMapView />} />
                        <Route path='/asset/1' element={<Asset />} />
                        <Route path='/asset-listing' element={<AssetListing />} />
                        <Route path='/settings' element={<Settings />} />

                        <Route path='*' element={<Navigate to='/asset-mapview' replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
