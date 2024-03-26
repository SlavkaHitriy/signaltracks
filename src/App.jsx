import { Sidebar } from '@/components/Sidebar';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './modules/Login';
import { Dashboard } from '@/modules/Dashboard/index.js';
import { Settings } from '@/modules/Settings/index.js';
import { Machines } from '@/modules/Machines/index.js';
import { MachinesDetails } from '@/modules/MachinesDetails/index.js';
import { MachinesNew } from '@/modules/MachinesNew/index.js';
import { AssetMapView } from '@/modules/AssetMapView/index.js';
import { AssetListing } from '@/modules/AssetListing/index.js';
import { Asset } from '@/modules/Asset/index.js';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('auth') && <Sidebar />}
            <div className={'app-inner'}>
                {/*{!location.pathname.includes('auth') && <Header />}*/}
                <main className={'main'}>
                    <Routes>
                        {/*<Route path='/auth/login' element={<Login />} />*/}

                        {/*<Route path='/dashboard' element={<Dashboard />} />*/}
                        <Route path='/asset-mapview' element={<AssetMapView />} />
                        <Route path='/asset/1' element={<Asset />} />
                        <Route path='/asset-listing' element={<AssetListing />} />
                        {/*<Route path='/devices' element={<Dashboard />} />*/}
                        {/*<Route path='/events' element={<Dashboard />} />*/}
                        {/*<Route path='/reporting' element={<Dashboard />} />*/}

                        {/*<Route path='/settings' element={<Settings />} />*/}

                        {/*<Route path='/machines' element={<Machines />} />*/}
                        {/*<Route path='/machines/:id' element={<MachinesDetails />} />*/}
                        {/*<Route path='/machines/new' element={<MachinesNew />} />*/}

                        <Route path='*' element={<Navigate to='/asset-mapview' replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
