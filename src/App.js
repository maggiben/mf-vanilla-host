import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic';
// const ClientHeadless = await import('frontend/pages/test/index');
// const ClientHeadless = await import('frontend/pages/client/ClientHeadless');
const { mountReact: ClientWrapper } = await import('frontend/ClientWrapper');
// const { mountReact: SearchWrapper } = await import('frontend/SearchWrapper');
const localization = await import('frontend/localization');



console.log('localization', localization);
console.log('localization', localization.toLocaleDateString(new Date()))

const client = document.getElementById('client');
const search = document.getElementById('search');

// mountVanilla(container);
ClientWrapper(client, {});
// SearchWrapper(search, {});


