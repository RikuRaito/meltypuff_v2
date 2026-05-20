--
-- PostgreSQL database dump
--

\restrict ejGzRSCu4kIxsGMEY86fzQAX9EyvgjMEcChax1tsIXbrOukm8fOG60wtcnF5K6Q

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.10 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.audit_log_entries (instance_id, id, payload, created_at, ip_address) FROM stdin;
\.


--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.custom_oauth_providers (id, provider_type, identifier, name, client_id, client_secret, acceptable_client_ids, scopes, pkce_enabled, attribute_mapping, authorization_params, enabled, email_optional, issuer, discovery_url, skip_nonce_check, cached_discovery, discovery_cached_at, authorization_url, token_url, userinfo_url, jwks_uri, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.flow_state (id, user_id, auth_code, code_challenge_method, code_challenge, provider_type, provider_access_token, provider_refresh_token, created_at, updated_at, authentication_method, auth_code_issued_at, invite_token, referrer, oauth_client_state_id, linking_target_id, email_optional) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at, is_sso_user, deleted_at, is_anonymous) FROM stdin;
\.


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at, id) FROM stdin;
\.


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.instances (id, uuid, raw_base_config, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.oauth_clients (id, client_secret_hash, registration_type, redirect_uris, grant_types, client_name, client_uri, logo_uri, created_at, updated_at, deleted_at, client_type, token_endpoint_auth_method) FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.sessions (id, user_id, created_at, updated_at, factor_id, aal, not_after, refreshed_at, user_agent, ip, tag, oauth_client_id, refresh_token_hmac_key, refresh_token_counter, scopes) FROM stdin;
\.


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.mfa_amr_claims (session_id, created_at, updated_at, authentication_method, id) FROM stdin;
\.


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.mfa_factors (id, user_id, friendly_name, factor_type, status, created_at, updated_at, secret, phone, last_challenged_at, web_authn_credential, web_authn_aaguid, last_webauthn_challenge_data) FROM stdin;
\.


--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.mfa_challenges (id, factor_id, created_at, verified_at, ip_address, otp_code, web_authn_session_data) FROM stdin;
\.


--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.oauth_authorizations (id, authorization_id, client_id, user_id, redirect_uri, scope, state, resource, code_challenge, code_challenge_method, response_type, status, authorization_code, created_at, expires_at, approved_at, nonce) FROM stdin;
\.


--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.oauth_client_states (id, provider_type, code_verifier, created_at) FROM stdin;
\.


--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.oauth_consents (id, user_id, client_id, scopes, granted_at, revoked_at) FROM stdin;
\.


--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.one_time_tokens (id, user_id, token_type, token_hash, relates_to, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.refresh_tokens (instance_id, id, token, user_id, revoked, created_at, updated_at, parent, session_id) FROM stdin;
\.


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.sso_providers (id, resource_id, created_at, updated_at, disabled) FROM stdin;
\.


--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.saml_providers (id, sso_provider_id, entity_id, metadata_xml, metadata_url, attribute_mapping, created_at, updated_at, name_id_format) FROM stdin;
\.


--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.saml_relay_states (id, sso_provider_id, request_id, for_email, redirect_to, created_at, updated_at, flow_state_id) FROM stdin;
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.schema_migrations (version) FROM stdin;
20171026211738
20171026211808
20171026211834
20180103212743
20180108183307
20180119214651
20180125194653
00
20210710035447
20210722035447
20210730183235
20210909172000
20210927181326
20211122151130
20211124214934
20211202183645
20220114185221
20220114185340
20220224000811
20220323170000
20220429102000
20220531120530
20220614074223
20220811173540
20221003041349
20221003041400
20221011041400
20221020193600
20221021073300
20221021082433
20221027105023
20221114143122
20221114143410
20221125140132
20221208132122
20221215195500
20221215195800
20221215195900
20230116124310
20230116124412
20230131181311
20230322519590
20230402418590
20230411005111
20230508135423
20230523124323
20230818113222
20230914180801
20231027141322
20231114161723
20231117164230
20240115144230
20240214120130
20240306115329
20240314092811
20240427152123
20240612123726
20240729123726
20240802193726
20240806073726
20241009103726
20250717082212
20250731150234
20250804100000
20250901200500
20250903112500
20250904133000
20250925093508
20251007112900
20251104100000
20251111201300
20251201000000
20260115000000
20260121000000
20260219120000
20260302000000
\.


--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.sso_domains (id, sso_provider_id, domain, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: webauthn_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.webauthn_challenges (id, user_id, challenge_type, session_data, created_at, expires_at) FROM stdin;
\.


--
-- Data for Name: webauthn_credentials; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.webauthn_credentials (id, user_id, credential_id, public_key, attestation_type, aaguid, sign_count, transports, backup_eligible, backed_up, friendly_name, created_at, updated_at, last_used_at) FROM stdin;
\.


--
-- Data for Name: Admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Admin" (id, in_app_id, passwd, email) FROM stdin;
1	admin_primary	$2b$10$2xesCGirO4ar7gEJmRk3YePNbGCmgz7kNHrvYvZr11XgPJif/k7N2	vape59336@gmail.com
\.


--
-- Data for Name: Contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Contact" (id, name, email, content, uuid) FROM stdin;
2	モーダルテスト	sairikuneont@gmail.com	テスト	3d23e748-0e9c-44cb-b11e-10f2423700d0
3	モーダルテスト	sairkuneont@gmail.com	モーダルテスト	1125620a-36c4-428a-9ff4-659cec22e602
4	SVeLuXTUbXgLXgNJu	ap.ux.o.s.ipuwa6.3@gmail.com	lmLNBpXlbnJIbTrEJJO	47e97902-e345-4b9c-af31-25759c68593c
\.


--
-- Data for Name: Coupon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Coupon" (id, code, type, discount_rate, is_active) FROM stdin;
3	test	PERCENT_OFF	5	f
6	modal_test	AMOUNT_OFF	500	f
7	refresh_test	PERCENT_OFF	1	f
4	input_test	PERCENT_OFF	10	f
\.


--
-- Data for Name: Payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Payment" (id, name, email, phone, zip_code, address1, address2, price, coupon, created_at, uuid, status) FROM stdin;
9	テスト	test@test.com	999999999	9100855	福井県福井市西方	13-15	2450	\N	2026-05-05 03:39:27.841	56bf8ab2-834e-499a-b869-2f0b55c83403	SHIPPED
10	メールテスト	sairikuneont@gmail.com	00000000	9100855	福井県福井市西方	13-15	20050	\N	2026-05-05 03:54:39.851	bc4beb74-213e-43b0-a8eb-ed3dc5097897	SHIPPED
13	通知テスト	sairikuneont@gmail.com	0090000	9100855	福井県福井市西方	13-15	2450	\N	2026-05-05 11:10:58.94	856d8984-9374-42d3-9a0c-79963524770a	SHIPPED
12	isProccessingテスト	sairikuneont@gmail.com	00000000	9100855	福井県福井市西方	13-15	2450	\N	2026-05-05 04:24:52.554	e4723709-5ba7-4ce8-951a-27cf704374c2	SHIPPED
11	メールテスト	sairikuneont@gmail.com	000000000	9100855	福井県福井市西方	13-15	6850	\N	2026-05-05 03:57:47.75	0380ae03-ccb5-4f4e-a598-6f3d4c26d70c	SHIPPED
16	テスト	sairikuneont@gmail.com	00000000	9200941	石川県金沢市旭町		15650	\N	2026-05-06 12:17:01.381	412809e9-3743-414d-a289-875623eee7e6	SHIPPED
20	production_test	sairikuneont@gmail.com	4444444	9200941	石川県金沢市旭町		2530	\N	2026-05-17 10:12:47.51	444cc3a5-8b8f-44f7-921f-ac093bd5a0ed	SHIPPED
19	亀井	sairikuneont@gmail.com	5555555555	9200941	石川県金沢市旭町		2530	\N	2026-05-17 06:35:47.023	eb32672c-3c76-4196-9f1c-f85eff4a8eaf	SHIPPED
18	テスト_ソート	test@	0000000000	9100855	福井県福井市西方		6930	\N	2026-05-09 13:36:35.871	8f6129e4-16cd-4172-8919-212f6d3bba63	SHIPPED
17	test	test@testc.com	0000000	9200941	石川県金沢市旭町		2327	\N	2026-05-07 15:29:42.15	f2748a94-42d1-40a0-94ff-7213150daacb	SHIPPED
15	テスト	sairikuneont@gmail.com	0000000000	9200941	石川県金沢市旭町		6850	\N	2026-05-06 12:13:55.61	18a7fe33-70b8-4ec8-a70c-92004138315d	SHIPPED
14	メールテスト	sairikuneont@gmail.com	08000000000	9200941	石川県金沢市旭町	3-1411	2450	\N	2026-05-06 12:01:51.804	80c53d23-4ed4-4ffd-8aa3-21a0b2f935b4	SHIPPED
\.


--
-- Data for Name: Product_Non; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product_Non" (id, name, display_name, price, stock, recommend, image_path, description) FROM stdin;
5	lm_melon	メロン	2200	10	4	{https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Melon/S__96903173_0.jpg,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Melon/Melon_front.png,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Melon/Melon_with_box.png}	Lost Maryブランドの人気フレーバー！\n一般的に販売されているベイプの５倍長持ち！\n\n・usb-c充電式　・3500回吸引可能（約3週間）\n・間食を減らし，ダイエットをしている方に特におすすめ\n\n味の美味しさはMelty Puffが保証します。\n\n【初期動作保証】\nサイト内Contactページから「お問い合わせ」にてご連絡ください。\n\n【状態】\n当ショップにて販売させていただく商品は全て新品の状態での配送となります。\n\n＊当ショップで販売しているものは全てノンニコチンとなっておりますので、安心してお使いいただけます。
2	lm_blueberry	ブルーベリー	2200	10	0	{https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/S__96903171_0.jpg,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/front.png,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/with_box.png}	Lost Maryブランドの人気No.1フレーバー！\n一般的に販売されているベイプの５倍長持ち！\n\n・usb-c充電式　・3500回吸引可能（約3週間）\n・間食を減らし，ダイエットをしている方に特におすすめ\n\n味の美味しさはMelty Puffが保証します。\n\n【初期動作保証】\nサイト内Contactページから「お問い合わせ」にてご連絡ください。\n\n【状態】\n当ショップにて販売させていただく商品は全て新品の状態での配送となります。\n\n＊当ショップで販売しているものは全てノンニコチンとなっておりますので、安心してお使いいただけます。
1	lm_grape	グレープ	2200	10	3	{https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Grape/S__96903177_0.jpg,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Grape/grape_front.png,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Grape/grape_with_box.png}	Lost Maryブランドの人気フレーバー！\n一般的に販売されているベイプの５倍長持ち！\n\n・usb-c充電式　・3500回吸引可能（約3週間）\n・間食を減らし，ダイエットをしている方に特におすすめ\n\n味の美味しさはMelty Puffが保証します。\n\n【初期動作保証】\nサイト内Contactページから「お問い合わせ」にてご連絡ください。\n\n【状態】\n当ショップにて販売させていただく商品は全て新品の状態での配送となります。\n\n＊当ショップで販売しているものは全てノンニコチンとなっておりますので、安心してお使いいただけます。
4	lm_muscat	マスカット	2200	10	1	{https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.jpg,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.1.jpg,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.2.jpg}	Lost Maryブランドの新作フレーバー！\n一般的に販売されているベイプの５倍長持ち！\n\n・usb-c充電式　・3500回吸引可能（約3週間）\n・間食を減らし，ダイエットをしている方に特におすすめ\n\n味の美味しさはMelty Puffが保証します。\n\n【初期動作保証】\nサイト内Contactページから「お問い合わせ」にてご連絡ください。\n\n【状態】\n当ショップにて販売させていただく商品は全て新品の状態での配送となります。\n\n＊当ショップで販売しているものは全てノンニコチンとなっておりますので、安心してお使いいただけます。
3	lm_mango	マンゴー	2200	10	2	{https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Mango/S__96903174_0.jpg,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Mango/Mango_front.png,https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Mango/Mang_with_box.jpg}	Lost Maryブランドの人気No.2フレーバー！\n一般的に販売されているベイプの５倍長持ち！\n\n・usb-c充電式　・3500回吸引可能（約3週間）\n・間食を減らし，ダイエットをしている方に特におすすめ\n\n味の美味しさはMelty Puffが保証します。\n\n【初期動作保証】\nサイト内Contactページから「お問い合わせ」にてご連絡ください。\n\n【状態】\n当ショップにて販売させていただく商品は全て新品の状態での配送となります。\n\n＊当ショップで販売しているものは全てノンニコチンとなっておりますので、安心してお使いいただけます。
\.


--
-- Data for Name: RegularCustomer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RegularCustomer" (id, name, phone, post_code, address1, address2) FROM stdin;
\.


--
-- Data for Name: Shipping_Fee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Shipping_Fee" (id, fee) FROM stdin;
1	250
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, passwd, address_1, address_2, phone_number, post_code) FROM stdin;
\.


--
-- Data for Name: page_view; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.page_view (id, path, created_at, session_id) FROM stdin;
12	/shop/home	2026-05-06 03:27:50.712	d811eae7-1799-4395-a6b0-5495da069149
13	/shop/None	2026-05-06 03:27:50.799	d811eae7-1799-4395-a6b0-5495da069149
14	/shop/shop-non	2026-05-06 03:27:52.33	d811eae7-1799-4395-a6b0-5495da069149
15	/shop/cart	2026-05-06 03:27:54.888	d811eae7-1799-4395-a6b0-5495da069149
16	/shop/shop-non	2026-05-06 03:27:57.958	d811eae7-1799-4395-a6b0-5495da069149
17	/shop/home	2026-05-06 03:27:59.686	d811eae7-1799-4395-a6b0-5495da069149
18	/shop/home	2026-05-06 03:27:59.702	d811eae7-1799-4395-a6b0-5495da069149
19	/shop/cart	2026-05-17 10:14:37.421	d95a9fec-606f-4158-9b70-9883a04e1b77
20	/shop/contact	2026-05-17 10:14:37.676	d95a9fec-606f-4158-9b70-9883a04e1b77
21	/shop/cart	2026-05-17 10:14:37.683	d95a9fec-606f-4158-9b70-9883a04e1b77
22	/shop/shop-non	2026-05-17 10:14:38.319	d95a9fec-606f-4158-9b70-9883a04e1b77
23	/shop/cart	2026-05-17 10:14:37.917	d95a9fec-606f-4158-9b70-9883a04e1b77
24	/shop/None	2026-05-17 10:14:37.9	d95a9fec-606f-4158-9b70-9883a04e1b77
25	/shop/home	2026-05-17 10:14:37.902	d95a9fec-606f-4158-9b70-9883a04e1b77
26	/shop/login	2026-05-17 10:14:37.919	d95a9fec-606f-4158-9b70-9883a04e1b77
27	/shop/shop-non	2026-05-17 10:14:37.94	d95a9fec-606f-4158-9b70-9883a04e1b77
28	/shop/contact	2026-05-17 10:14:37.932	d95a9fec-606f-4158-9b70-9883a04e1b77
29	/shop/contact	2026-05-17 10:14:38.072	d95a9fec-606f-4158-9b70-9883a04e1b77
30	/shop/article	2026-05-17 10:14:38.182	d95a9fec-606f-4158-9b70-9883a04e1b77
31	/shop/cart	2026-05-17 10:14:38.376	d95a9fec-606f-4158-9b70-9883a04e1b77
32	/shop/cart	2026-05-17 10:14:38.365	d95a9fec-606f-4158-9b70-9883a04e1b77
33	/shop/contact	2026-05-17 10:14:38.428	d95a9fec-606f-4158-9b70-9883a04e1b77
34	/shop/contact	2026-05-17 14:34:31.349	a9e7fb3c-3a52-4fb3-a8ed-317a59255ab3
35	/shop/home	2026-05-17 14:34:31.379	6036b53e-fb1e-44f2-8598-19344ac4a1c5
36	/shop/None	2026-05-17 14:34:31.523	6036b53e-fb1e-44f2-8598-19344ac4a1c5
37	/shop/home	2026-05-17 14:34:33.599	6036b53e-fb1e-44f2-8598-19344ac4a1c5
38	/shop/cart	2026-05-17 14:34:33.636	6036b53e-fb1e-44f2-8598-19344ac4a1c5
39	/shop/shop-non	2026-05-17 14:34:34.842	6036b53e-fb1e-44f2-8598-19344ac4a1c5
40	/shop/shop-non	2026-05-17 14:34:35.026	6036b53e-fb1e-44f2-8598-19344ac4a1c5
41	/shop/shop-non	2026-05-17 14:34:35.067	6036b53e-fb1e-44f2-8598-19344ac4a1c5
42	/shop/shop-non	2026-05-17 14:34:35.138	6036b53e-fb1e-44f2-8598-19344ac4a1c5
43	/shop/cart	2026-05-17 14:34:35.209	6036b53e-fb1e-44f2-8598-19344ac4a1c5
44	/shop/cart	2026-05-17 14:34:35.265	6036b53e-fb1e-44f2-8598-19344ac4a1c5
45	/shop/cart	2026-05-17 14:34:35.252	6036b53e-fb1e-44f2-8598-19344ac4a1c5
46	/shop/shop-non/5	2026-05-17 14:34:36.242	6036b53e-fb1e-44f2-8598-19344ac4a1c5
47	/shop/shop-non	2026-05-17 14:34:36.249	6036b53e-fb1e-44f2-8598-19344ac4a1c5
48	/shop/shop-non/1	2026-05-17 14:34:36.26	6036b53e-fb1e-44f2-8598-19344ac4a1c5
49	/shop/shop-non/5	2026-05-17 14:34:36.754	6036b53e-fb1e-44f2-8598-19344ac4a1c5
50	/shop/shop-non/1	2026-05-17 14:34:36.764	6036b53e-fb1e-44f2-8598-19344ac4a1c5
51	/shop/shop-non/3	2026-05-17 14:34:36.754	6036b53e-fb1e-44f2-8598-19344ac4a1c5
52	/shop/shop-non/2	2026-05-17 14:34:37.151	6036b53e-fb1e-44f2-8598-19344ac4a1c5
53	/shop/shop-non/3	2026-05-17 14:34:37.158	6036b53e-fb1e-44f2-8598-19344ac4a1c5
54	/shop/shop-non/4	2026-05-17 14:34:37.177	6036b53e-fb1e-44f2-8598-19344ac4a1c5
55	/shop/cart	2026-05-17 14:34:41.288	6036b53e-fb1e-44f2-8598-19344ac4a1c5
56	/shop/cart	2026-05-17 14:34:43.188	6036b53e-fb1e-44f2-8598-19344ac4a1c5
57	/shop/home	2026-05-17 14:46:20.012	0eb1513f-d29d-43f6-919b-dd460a31ba39
58	/shop/home	2026-05-17 14:46:20.567	c3a3c5cc-755e-4f3f-b8de-e2e16e7ced96
59	/shop/home	2026-05-17 14:46:27.815	b2193d1a-2242-4a27-a67b-0a5464e39811
60	/shop/home	2026-05-17 14:46:29.628	b2193d1a-2242-4a27-a67b-0a5464e39811
61	/shop/contact	2026-05-17 14:46:29.904	0eb1513f-d29d-43f6-919b-dd460a31ba39
62	/shop/cart	2026-05-17 14:46:29.955	0eb1513f-d29d-43f6-919b-dd460a31ba39
63	/shop/article	2026-05-17 14:46:30.088	0eb1513f-d29d-43f6-919b-dd460a31ba39
64	/shop/https%3A/web.squarecdn.com/v1/square.js	2026-05-17 14:46:29.64	0eb1513f-d29d-43f6-919b-dd460a31ba39
65	/shop/shop-non	2026-05-17 14:46:29.684	0eb1513f-d29d-43f6-919b-dd460a31ba39
66	/shop/login	2026-05-17 14:46:30.18	0eb1513f-d29d-43f6-919b-dd460a31ba39
67	/shop/home	2026-05-17 14:46:41.138	1095b7db-5997-41f4-af7c-af8dea7be988
68	/shop/home	2026-05-17 14:46:41.84	f7b83247-5abc-4232-b1e5-b1cc6891999a
69	/shop/https%3A/web.squarecdn.com/v1/square.js	2026-05-17 14:46:43.209	f7b83247-5abc-4232-b1e5-b1cc6891999a
70	/shop/contact	2026-05-17 14:46:43.234	f7b83247-5abc-4232-b1e5-b1cc6891999a
71	/shop/article	2026-05-17 14:46:43.607	f7b83247-5abc-4232-b1e5-b1cc6891999a
72	/shop/shop-non	2026-05-17 14:46:43.225	f7b83247-5abc-4232-b1e5-b1cc6891999a
73	/shop/login	2026-05-17 14:46:43.253	f7b83247-5abc-4232-b1e5-b1cc6891999a
74	/shop/cart	2026-05-17 14:46:43.289	f7b83247-5abc-4232-b1e5-b1cc6891999a
75	/shop/shop-nic	2026-05-17 14:46:43.617	f7b83247-5abc-4232-b1e5-b1cc6891999a
76	/shop/home	2026-05-17 14:47:35.319	519e3269-a5a7-4e9a-964a-50482a5d0a14
77	/shop/home	2026-05-17 14:47:35.321	23f0b5f8-2c24-4ef2-8880-983ed2cddbce
78	/shop/home	2026-05-17 14:48:16.652	4e174b64-e5bf-492e-80dd-fb9e5ad84b84
79	/shop/login	2026-05-17 14:58:53.819	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
80	/shop/article	2026-05-17 14:58:53.855	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
81	/shop/shop-non	2026-05-17 14:58:54	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
82	/shop/contact	2026-05-17 14:58:54.628	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
83	/shop/shop-non	2026-05-17 14:58:54.091	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
84	/shop/contact	2026-05-17 14:58:54.752	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
85	/shop/cart	2026-05-17 14:58:54.382	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
86	/shop/cart	2026-05-17 14:58:54.428	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
87	/shop/cart	2026-05-17 14:58:54.489	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
88	/shop/contact	2026-05-17 14:58:54.668	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
89	/shop/None	2026-05-17 14:58:54.691	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
90	/shop/shop-non	2026-05-17 14:58:54.725	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
91	/shop/cart	2026-05-17 14:58:54.743	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
92	/shop/home	2026-05-17 14:58:54.739	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
93	/shop/shop-non	2026-05-17 14:58:55.227	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
94	/shop/contact	2026-05-17 14:58:55.563	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
95	/shop/shop-non	2026-05-17 14:59:16.022	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
96	/shop/home	2026-05-17 15:02:20.901	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
97	/shop/cart	2026-05-17 15:02:20.953	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
98	/shop/contact	2026-05-17 15:02:21.009	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
99	/shop/shop-non	2026-05-17 15:02:21.041	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
100	/shop/cart	2026-05-17 15:02:21.094	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
101	/shop/shop-non	2026-05-17 15:02:21.067	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
102	/shop/login	2026-05-17 15:02:21.057	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
103	/shop/shop-non	2026-05-17 15:02:21.133	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
104	/shop/cart	2026-05-17 15:02:21.122	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
105	/shop/cart	2026-05-17 15:02:21.129	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
106	/shop/shop-non	2026-05-17 15:02:21.072	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
107	/shop/article	2026-05-17 15:02:21.095	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
108	/shop/contact	2026-05-17 15:02:21.143	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
109	/shop/contact	2026-05-17 15:04:27.556	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
110	/shop/home	2026-05-17 15:04:56.578	ca2b08f6-0fe9-4190-b764-68f147fd18be
111	/shop/cart	2026-05-17 15:04:56.63	ca2b08f6-0fe9-4190-b764-68f147fd18be
112	/shop/cart	2026-05-17 15:04:56.675	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
113	/shop/shop-non	2026-05-17 15:04:56.7	ca2b08f6-0fe9-4190-b764-68f147fd18be
114	/shop/shop-non	2026-05-17 15:04:56.697	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
115	/shop/shop-non	2026-05-17 15:04:56.74	ca2b08f6-0fe9-4190-b764-68f147fd18be
116	/shop/None	2026-05-17 15:04:56.7	ca2b08f6-0fe9-4190-b764-68f147fd18be
117	/shop/shop-non	2026-05-17 15:04:56.731	ca2b08f6-0fe9-4190-b764-68f147fd18be
118	/shop/cart	2026-05-17 15:04:56.736	ca2b08f6-0fe9-4190-b764-68f147fd18be
119	/shop/shop-non	2026-05-17 15:04:56.917	ca2b08f6-0fe9-4190-b764-68f147fd18be
120	/shop/None	2026-05-17 15:04:57.563	627a7fb6-51b5-4fd2-bcfe-29e8e22f687f
121	/shop/shop-non	2026-05-17 15:04:57.605	ca2b08f6-0fe9-4190-b764-68f147fd18be
122	/shop/article	2026-05-17 15:05:09.846	ca2b08f6-0fe9-4190-b764-68f147fd18be
123	/shop/cart	2026-05-17 15:05:09.852	ca2b08f6-0fe9-4190-b764-68f147fd18be
124	/shop/contact	2026-05-17 15:05:09.873	ca2b08f6-0fe9-4190-b764-68f147fd18be
125	/shop/login	2026-05-17 15:05:09.844	ca2b08f6-0fe9-4190-b764-68f147fd18be
126	/shop/contact	2026-05-17 15:05:09.869	ca2b08f6-0fe9-4190-b764-68f147fd18be
127	/shop/contact	2026-05-17 15:05:09.877	ca2b08f6-0fe9-4190-b764-68f147fd18be
128	/shop/contact	2026-05-17 15:05:09.878	ca2b08f6-0fe9-4190-b764-68f147fd18be
129	/shop/cart	2026-05-17 15:05:09.854	ca2b08f6-0fe9-4190-b764-68f147fd18be
130	/shop/home	2026-05-17 15:07:08.448	c55397e2-74b9-4dc6-994b-11a4aa5f5927
131	/shop/cart	2026-05-17 15:07:08.467	c55397e2-74b9-4dc6-994b-11a4aa5f5927
132	/shop/None	2026-05-17 15:07:24.149	c55397e2-74b9-4dc6-994b-11a4aa5f5927
133	/shop/contact	2026-05-17 15:07:29.095	c55397e2-74b9-4dc6-994b-11a4aa5f5927
134	/shop/article	2026-05-17 15:07:29.1	c55397e2-74b9-4dc6-994b-11a4aa5f5927
135	/shop/shop-non	2026-05-17 15:07:33.285	c55397e2-74b9-4dc6-994b-11a4aa5f5927
136	/shop/login	2026-05-17 15:07:33.69	c55397e2-74b9-4dc6-994b-11a4aa5f5927
137	/shop/shop-non/4	2026-05-17 15:07:42.974	c55397e2-74b9-4dc6-994b-11a4aa5f5927
138	/shop/shop-non/3	2026-05-17 15:07:44.139	c55397e2-74b9-4dc6-994b-11a4aa5f5927
139	/shop/shop-non/2	2026-05-17 15:07:45.681	c55397e2-74b9-4dc6-994b-11a4aa5f5927
140	/shop/shop-non/1	2026-05-17 15:07:46.193	c55397e2-74b9-4dc6-994b-11a4aa5f5927
141	/shop/shop-non/5	2026-05-17 15:07:45.678	c55397e2-74b9-4dc6-994b-11a4aa5f5927
142	/shop/contact	2026-05-17 15:31:54.551	3930ddc8-dfee-40e7-a61d-2c78251b13e8
143	/shop/shop-non	2026-05-17 15:31:54.525	3930ddc8-dfee-40e7-a61d-2c78251b13e8
144	/shop/shop-non/2	2026-05-17 15:31:54.928	3930ddc8-dfee-40e7-a61d-2c78251b13e8
145	/shop/shop-non/4	2026-05-17 15:31:54.948	3930ddc8-dfee-40e7-a61d-2c78251b13e8
146	/shop/home	2026-05-17 15:31:55.402	3930ddc8-dfee-40e7-a61d-2c78251b13e8
147	/shop/article	2026-05-17 15:31:55.438	3930ddc8-dfee-40e7-a61d-2c78251b13e8
148	/shop/login	2026-05-17 15:31:55.483	3930ddc8-dfee-40e7-a61d-2c78251b13e8
149	/shop/home	2026-05-17 16:17:11.402	26e219ce-73fe-411e-9eaf-cb37e852e1e0
150	/shop/shop-non	2026-05-17 16:49:30.653	c0b4b516-0338-4422-bbac-f50739167ea3
151	/shop/shop-non/4	2026-05-17 17:29:39.163	210f52da-51f0-4cb7-8919-44da03b936c6
152	/shop/article	2026-05-17 17:29:40.077	c68d6fed-e843-4537-ad58-6048b2534be0
153	/shop/home	2026-05-17 19:55:21.338	5fce0e78-2716-43ab-bc53-a436263d6420
154	/shop/home	2026-05-17 21:41:50.297	5b1d5e70-5c72-4cec-a60c-2703de6f3615
155	/shop/home	2026-05-17 21:41:50.986	85956d2b-d86e-496b-97fe-4fcb545dd868
156	/shop/cart	2026-05-17 22:35:38.29	3d0b002b-60a2-4ef7-b577-0ef919ea5dea
157	/shop/cart	2026-05-17 22:35:40.161	3d0b002b-60a2-4ef7-b577-0ef919ea5dea
158	/shop/shop-non	2026-05-17 22:35:40.367	a79fe402-5e15-4301-aada-231b5a545329
159	/shop/cart	2026-05-17 22:35:40.535	3d0b002b-60a2-4ef7-b577-0ef919ea5dea
160	/shop/cart	2026-05-17 22:35:40.826	a79fe402-5e15-4301-aada-231b5a545329
161	/shop/cart	2026-05-17 22:35:41.361	a79fe402-5e15-4301-aada-231b5a545329
162	/shop/cart	2026-05-17 22:35:41.843	a79fe402-5e15-4301-aada-231b5a545329
163	/shop/shop-non	2026-05-17 22:35:42.369	a79fe402-5e15-4301-aada-231b5a545329
164	/shop/shop-non	2026-05-17 22:35:43.42	a79fe402-5e15-4301-aada-231b5a545329
165	/shop/shop-non	2026-05-17 22:35:44.407	a79fe402-5e15-4301-aada-231b5a545329
166	/shop/cart	2026-05-17 23:00:39.032	6c40e311-ac33-4d75-b2e4-24c95fe4b24b
167	/shop/cart	2026-05-17 23:00:40.062	6c40e311-ac33-4d75-b2e4-24c95fe4b24b
168	/shop/shop-non	2026-05-17 23:00:39.506	1738ec41-4582-4d98-bd3e-581a12740d94
169	/shop/cart	2026-05-17 23:00:40.544	6c40e311-ac33-4d75-b2e4-24c95fe4b24b
170	/shop/cart	2026-05-17 23:00:40.452	6c40e311-ac33-4d75-b2e4-24c95fe4b24b
171	/shop/cart	2026-05-17 23:00:41.405	1738ec41-4582-4d98-bd3e-581a12740d94
172	/shop/shop-non	2026-05-17 23:00:42.274	1738ec41-4582-4d98-bd3e-581a12740d94
173	/shop/cart	2026-05-17 23:00:41.724	1738ec41-4582-4d98-bd3e-581a12740d94
174	/shop/shop-non	2026-05-17 23:00:42.832	1738ec41-4582-4d98-bd3e-581a12740d94
175	/shop/shop-non	2026-05-17 23:00:43.343	1738ec41-4582-4d98-bd3e-581a12740d94
176	/shop/home	2026-05-17 23:04:53.995	62ccbf50-4896-4871-acb6-5af47405073c
177	/shop/cart	2026-05-17 23:25:39.738	80bd1945-8750-4d22-8835-ab30ee10e22d
178	/shop/shop-non	2026-05-17 23:25:40.715	d0cfb388-957c-43e9-a164-1d4e8721c1ad
179	/shop/shop-non	2026-05-17 23:25:40.242	d0cfb388-957c-43e9-a164-1d4e8721c1ad
180	/shop/shop-non	2026-05-17 23:25:40.788	d0cfb388-957c-43e9-a164-1d4e8721c1ad
181	/shop/cart	2026-05-17 23:25:41.234	80bd1945-8750-4d22-8835-ab30ee10e22d
182	/shop/cart	2026-05-17 23:25:41.447	80bd1945-8750-4d22-8835-ab30ee10e22d
183	/shop/cart	2026-05-17 23:25:42.261	80bd1945-8750-4d22-8835-ab30ee10e22d
184	/shop/cart	2026-05-17 23:25:42.82	80bd1945-8750-4d22-8835-ab30ee10e22d
185	/shop/shop-non	2026-05-17 23:25:43.282	80bd1945-8750-4d22-8835-ab30ee10e22d
186	/shop/shop-non	2026-05-17 23:25:43.854	80bd1945-8750-4d22-8835-ab30ee10e22d
187	/shop/cart	2026-05-17 23:55:35.597	07bb4520-242e-4877-926a-c0d93c9bf80f
188	/shop/cart	2026-05-17 23:55:36.49	07bb4520-242e-4877-926a-c0d93c9bf80f
189	/shop/shop-non	2026-05-17 23:55:35.997	80a01170-f31a-4f3e-88a2-ce7ffd0ed2f3
190	/shop/shop-non	2026-05-17 23:55:36.504	80a01170-f31a-4f3e-88a2-ce7ffd0ed2f3
191	/shop/cart	2026-05-17 23:55:37.448	07bb4520-242e-4877-926a-c0d93c9bf80f
192	/shop/cart	2026-05-17 23:55:36.961	07bb4520-242e-4877-926a-c0d93c9bf80f
193	/shop/shop-non	2026-05-17 23:55:37.289	80a01170-f31a-4f3e-88a2-ce7ffd0ed2f3
194	/shop/shop-non	2026-05-17 23:55:38.425	07bb4520-242e-4877-926a-c0d93c9bf80f
195	/shop/cart	2026-05-17 23:55:37.935	07bb4520-242e-4877-926a-c0d93c9bf80f
196	/shop/shop-non	2026-05-17 23:55:38.934	07bb4520-242e-4877-926a-c0d93c9bf80f
197	/shop/home	2026-05-18 00:12:56.271	41a4c884-303a-4642-ae4c-1f8547521df2
198	/shop/contact	2026-05-18 00:12:56.334	74dfe90b-7793-44c7-a3c2-66deb5a41b70
199	/shop/shop-non	2026-05-18 00:12:56.32	92941113-3c83-4239-8d7c-8fecba2976dd
200	/shop/shop-non	2026-05-18 00:12:56.364	0c97c6b1-640b-4c70-8e47-b27b07ec7c5b
201	/shop/shop-non	2026-05-18 00:12:56.394	038c5eef-2466-4bab-9c74-1c7b17e8ef98
202	/shop/shop-non	2026-05-18 00:12:56.439	038c5eef-2466-4bab-9c74-1c7b17e8ef98
203	/shop/cart	2026-05-18 00:12:56.693	038c5eef-2466-4bab-9c74-1c7b17e8ef98
204	/shop/cart	2026-05-18 00:12:56.778	038c5eef-2466-4bab-9c74-1c7b17e8ef98
205	/shop/cart	2026-05-18 00:12:57.167	bf7b0bcb-c87b-4667-a47f-d2f2f153c732
206	/shop/None	2026-05-18 00:12:57.206	0c97c6b1-640b-4c70-8e47-b27b07ec7c5b
207	/shop/login	2026-05-18 00:12:57.394	038c5eef-2466-4bab-9c74-1c7b17e8ef98
208	/shop/contact	2026-05-18 00:12:59.272	038c5eef-2466-4bab-9c74-1c7b17e8ef98
209	/shop/cart	2026-05-18 00:12:59.276	038c5eef-2466-4bab-9c74-1c7b17e8ef98
210	/shop/article	2026-05-18 00:12:59.282	0c97c6b1-640b-4c70-8e47-b27b07ec7c5b
211	/shop/shop-non	2026-05-18 00:12:59.276	038c5eef-2466-4bab-9c74-1c7b17e8ef98
212	/shop/shop-non/3	2026-05-18 00:12:59.331	038c5eef-2466-4bab-9c74-1c7b17e8ef98
213	/shop/shop-non/4	2026-05-18 00:12:59.804	038c5eef-2466-4bab-9c74-1c7b17e8ef98
214	/shop/shop-non/2	2026-05-18 00:12:59.823	038c5eef-2466-4bab-9c74-1c7b17e8ef98
215	/shop/shop-non/4	2026-05-18 00:12:59.828	038c5eef-2466-4bab-9c74-1c7b17e8ef98
216	/shop/shop-non/5	2026-05-18 00:12:59.857	038c5eef-2466-4bab-9c74-1c7b17e8ef98
217	/shop/shop-non/5	2026-05-18 00:12:59.299	038c5eef-2466-4bab-9c74-1c7b17e8ef98
218	/shop/contact	2026-05-18 00:12:59.33	038c5eef-2466-4bab-9c74-1c7b17e8ef98
219	/shop/shop-non/1	2026-05-18 00:12:59.367	038c5eef-2466-4bab-9c74-1c7b17e8ef98
220	/shop/shop-non/3	2026-05-18 00:13:00.034	038c5eef-2466-4bab-9c74-1c7b17e8ef98
221	/shop/shop-non/1	2026-05-18 00:12:59.873	038c5eef-2466-4bab-9c74-1c7b17e8ef98
222	/shop/shop-non/2	2026-05-18 00:13:00.049	038c5eef-2466-4bab-9c74-1c7b17e8ef98
223	/shop/cart	2026-05-18 00:13:03.821	038c5eef-2466-4bab-9c74-1c7b17e8ef98
224	/shop/login	2026-05-18 00:13:03.91	038c5eef-2466-4bab-9c74-1c7b17e8ef98
225	/shop/cart	2026-05-18 00:13:05.766	038c5eef-2466-4bab-9c74-1c7b17e8ef98
226	/shop/article	2026-05-18 00:13:15.192	038c5eef-2466-4bab-9c74-1c7b17e8ef98
227	/shop/contact	2026-05-18 00:13:17.181	038c5eef-2466-4bab-9c74-1c7b17e8ef98
228	/shop/shop-non	2026-05-18 00:13:17.188	0c97c6b1-640b-4c70-8e47-b27b07ec7c5b
229	/shop/login	2026-05-18 00:13:17.195	038c5eef-2466-4bab-9c74-1c7b17e8ef98
230	/shop/article	2026-05-18 00:13:17.474	038c5eef-2466-4bab-9c74-1c7b17e8ef98
231	/shop/home	2026-05-18 00:13:37.249	038c5eef-2466-4bab-9c74-1c7b17e8ef98
232	/shop/None	2026-05-18 00:13:37.274	038c5eef-2466-4bab-9c74-1c7b17e8ef98
233	/shop/shop-non	2026-05-18 00:13:37.342	038c5eef-2466-4bab-9c74-1c7b17e8ef98
234	/shop/shop-non	2026-05-18 00:13:37.355	038c5eef-2466-4bab-9c74-1c7b17e8ef98
235	/shop/cart	2026-05-18 00:13:37.374	038c5eef-2466-4bab-9c74-1c7b17e8ef98
236	/shop/article	2026-05-18 00:13:37.369	038c5eef-2466-4bab-9c74-1c7b17e8ef98
237	/shop/shop-non	2026-05-18 00:13:37.394	038c5eef-2466-4bab-9c74-1c7b17e8ef98
238	/shop/shop-non	2026-05-18 00:13:37.403	038c5eef-2466-4bab-9c74-1c7b17e8ef98
239	/shop/contact	2026-05-18 00:13:37.419	038c5eef-2466-4bab-9c74-1c7b17e8ef98
240	/shop/contact	2026-05-18 00:13:37.422	038c5eef-2466-4bab-9c74-1c7b17e8ef98
241	/shop/contact	2026-05-18 00:13:37.441	038c5eef-2466-4bab-9c74-1c7b17e8ef98
242	/shop/cart	2026-05-18 00:13:37.436	038c5eef-2466-4bab-9c74-1c7b17e8ef98
243	/shop/cart	2026-05-18 00:13:37.428	038c5eef-2466-4bab-9c74-1c7b17e8ef98
244	/shop/shop-non	2026-05-18 00:13:37.499	038c5eef-2466-4bab-9c74-1c7b17e8ef98
245	/shop/shop-non	2026-05-18 00:13:37.575	038c5eef-2466-4bab-9c74-1c7b17e8ef98
246	/shop/contact	2026-05-18 00:13:39.904	038c5eef-2466-4bab-9c74-1c7b17e8ef98
247	/shop/login	2026-05-18 00:13:39.917	038c5eef-2466-4bab-9c74-1c7b17e8ef98
248	/shop/login	2026-05-18 00:13:39.915	038c5eef-2466-4bab-9c74-1c7b17e8ef98
249	/shop/cart	2026-05-18 00:13:39.922	038c5eef-2466-4bab-9c74-1c7b17e8ef98
250	/shop/article	2026-05-18 00:13:39.94	038c5eef-2466-4bab-9c74-1c7b17e8ef98
251	/shop/shop-non/1	2026-05-18 00:13:39.941	038c5eef-2466-4bab-9c74-1c7b17e8ef98
252	/shop/shop-non/4	2026-05-18 00:13:40.005	038c5eef-2466-4bab-9c74-1c7b17e8ef98
253	/shop/shop-non/3	2026-05-18 00:13:40.008	038c5eef-2466-4bab-9c74-1c7b17e8ef98
254	/shop/shop-non/2	2026-05-18 00:13:40.155	038c5eef-2466-4bab-9c74-1c7b17e8ef98
255	/shop/shop-non/3	2026-05-18 00:13:40.234	038c5eef-2466-4bab-9c74-1c7b17e8ef98
256	/shop/shop-non/1	2026-05-18 00:13:40.247	038c5eef-2466-4bab-9c74-1c7b17e8ef98
257	/shop/shop-non/5	2026-05-18 00:13:40.203	038c5eef-2466-4bab-9c74-1c7b17e8ef98
258	/shop/shop-non/4	2026-05-18 00:13:40.367	038c5eef-2466-4bab-9c74-1c7b17e8ef98
259	/shop/shop-non/2	2026-05-18 00:13:40.431	038c5eef-2466-4bab-9c74-1c7b17e8ef98
260	/shop/shop-non	2026-05-18 00:13:42.566	038c5eef-2466-4bab-9c74-1c7b17e8ef98
261	/shop/shop-non/5	2026-05-18 00:13:43.131	038c5eef-2466-4bab-9c74-1c7b17e8ef98
262	/shop/shop-non/1	2026-05-18 00:13:43.141	038c5eef-2466-4bab-9c74-1c7b17e8ef98
263	/shop/shop-non/4	2026-05-18 00:13:43.142	038c5eef-2466-4bab-9c74-1c7b17e8ef98
264	/shop/shop-non/3	2026-05-18 00:13:43.146	038c5eef-2466-4bab-9c74-1c7b17e8ef98
265	/shop/shop-non/5	2026-05-18 00:13:43.148	038c5eef-2466-4bab-9c74-1c7b17e8ef98
266	/shop/shop-non/2	2026-05-18 00:13:43.368	038c5eef-2466-4bab-9c74-1c7b17e8ef98
267	/shop/cart	2026-05-18 00:13:43.382	038c5eef-2466-4bab-9c74-1c7b17e8ef98
268	/shop/article	2026-05-18 00:13:43.413	038c5eef-2466-4bab-9c74-1c7b17e8ef98
269	/shop/cart	2026-05-18 00:13:43.467	038c5eef-2466-4bab-9c74-1c7b17e8ef98
270	/shop/shop-non/3	2026-05-18 00:13:43.686	038c5eef-2466-4bab-9c74-1c7b17e8ef98
271	/shop/shop-non/2	2026-05-18 00:13:43.911	038c5eef-2466-4bab-9c74-1c7b17e8ef98
272	/shop/cart	2026-05-18 00:13:43.448	038c5eef-2466-4bab-9c74-1c7b17e8ef98
273	/shop/contact	2026-05-18 00:13:44.089	038c5eef-2466-4bab-9c74-1c7b17e8ef98
274	/shop/shop-non	2026-05-18 00:13:44.092	038c5eef-2466-4bab-9c74-1c7b17e8ef98
275	/shop/login	2026-05-18 00:13:43.547	038c5eef-2466-4bab-9c74-1c7b17e8ef98
276	/shop/shop-non/1	2026-05-18 00:13:43.699	038c5eef-2466-4bab-9c74-1c7b17e8ef98
277	/shop/shop-non/4	2026-05-18 00:13:43.883	038c5eef-2466-4bab-9c74-1c7b17e8ef98
278	/shop/contact	2026-05-18 00:13:43.911	038c5eef-2466-4bab-9c74-1c7b17e8ef98
279	/shop/contact	2026-05-18 00:13:43.404	038c5eef-2466-4bab-9c74-1c7b17e8ef98
280	/shop/cart	2026-05-18 00:13:43.444	038c5eef-2466-4bab-9c74-1c7b17e8ef98
281	/shop/cart	2026-05-18 00:13:43.966	038c5eef-2466-4bab-9c74-1c7b17e8ef98
282	/shop/login	2026-05-18 00:13:43.979	038c5eef-2466-4bab-9c74-1c7b17e8ef98
283	/shop/article	2026-05-18 00:13:44.016	038c5eef-2466-4bab-9c74-1c7b17e8ef98
284	/shop/shop-non	2026-05-18 00:13:44.069	038c5eef-2466-4bab-9c74-1c7b17e8ef98
285	/shop/contact	2026-05-18 00:13:44.069	038c5eef-2466-4bab-9c74-1c7b17e8ef98
286	/shop/shop-non	2026-05-18 00:13:45.51	038c5eef-2466-4bab-9c74-1c7b17e8ef98
287	/shop/cart	2026-05-18 00:13:45.515	038c5eef-2466-4bab-9c74-1c7b17e8ef98
288	/shop/cart	2026-05-18 00:18:47.822	038c5eef-2466-4bab-9c74-1c7b17e8ef98
289	/shop/shop-non/3	2026-05-18 00:40:20.838	038c5eef-2466-4bab-9c74-1c7b17e8ef98
290	/shop/shop-non/5	2026-05-18 00:40:21.176	038c5eef-2466-4bab-9c74-1c7b17e8ef98
291	/shop/shop-non	2026-05-18 00:40:21.239	038c5eef-2466-4bab-9c74-1c7b17e8ef98
292	/shop/shop-non/1	2026-05-18 00:40:21.294	038c5eef-2466-4bab-9c74-1c7b17e8ef98
293	/shop/shop-non/4	2026-05-18 00:40:21.311	038c5eef-2466-4bab-9c74-1c7b17e8ef98
294	/shop/shop-non/2	2026-05-18 00:40:21.564	038c5eef-2466-4bab-9c74-1c7b17e8ef98
295	/shop/cart	2026-05-18 00:40:21.665	038c5eef-2466-4bab-9c74-1c7b17e8ef98
296	/shop/login	2026-05-18 00:40:21.716	038c5eef-2466-4bab-9c74-1c7b17e8ef98
297	/shop/contact	2026-05-18 00:40:21.714	038c5eef-2466-4bab-9c74-1c7b17e8ef98
298	/shop/home	2026-05-18 00:40:28.525	038c5eef-2466-4bab-9c74-1c7b17e8ef98
299	/shop/article	2026-05-18 00:40:28.53	038c5eef-2466-4bab-9c74-1c7b17e8ef98
300	/shop/shop-non	2026-05-18 00:40:28.726	038c5eef-2466-4bab-9c74-1c7b17e8ef98
301	/shop/cart	2026-05-18 00:40:28.775	038c5eef-2466-4bab-9c74-1c7b17e8ef98
302	/shop/shop-non	2026-05-18 00:40:28.789	038c5eef-2466-4bab-9c74-1c7b17e8ef98
303	/shop/shop-non	2026-05-18 00:40:28.789	038c5eef-2466-4bab-9c74-1c7b17e8ef98
304	/shop/cart	2026-05-18 00:40:28.8	038c5eef-2466-4bab-9c74-1c7b17e8ef98
305	/shop/shop-non	2026-05-18 00:40:28.889	038c5eef-2466-4bab-9c74-1c7b17e8ef98
306	/shop/None	2026-05-18 00:40:28.579	038c5eef-2466-4bab-9c74-1c7b17e8ef98
307	/shop/login	2026-05-18 00:40:28.636	038c5eef-2466-4bab-9c74-1c7b17e8ef98
308	/shop/contact	2026-05-18 00:40:28.662	038c5eef-2466-4bab-9c74-1c7b17e8ef98
309	/shop/article	2026-05-18 00:40:28.675	038c5eef-2466-4bab-9c74-1c7b17e8ef98
310	/shop/cart	2026-05-18 00:40:28.772	038c5eef-2466-4bab-9c74-1c7b17e8ef98
311	/shop/shop-non	2026-05-18 00:40:28.788	038c5eef-2466-4bab-9c74-1c7b17e8ef98
312	/shop/contact	2026-05-18 00:40:28.881	038c5eef-2466-4bab-9c74-1c7b17e8ef98
313	/shop/shop-non	2026-05-18 00:40:28.878	038c5eef-2466-4bab-9c74-1c7b17e8ef98
314	/shop/contact	2026-05-18 00:40:28.907	038c5eef-2466-4bab-9c74-1c7b17e8ef98
315	/shop/cart	2026-05-18 00:40:28.921	038c5eef-2466-4bab-9c74-1c7b17e8ef98
316	/shop/article	2026-05-18 00:40:30.183	038c5eef-2466-4bab-9c74-1c7b17e8ef98
317	/shop/shop-non/5	2026-05-18 00:40:30.21	038c5eef-2466-4bab-9c74-1c7b17e8ef98
318	/shop/login	2026-05-18 00:40:30.224	038c5eef-2466-4bab-9c74-1c7b17e8ef98
319	/shop/shop-non/3	2026-05-18 00:40:30.24	038c5eef-2466-4bab-9c74-1c7b17e8ef98
320	/shop/shop-non/4	2026-05-18 00:40:30.247	038c5eef-2466-4bab-9c74-1c7b17e8ef98
321	/shop/shop-non/2	2026-05-18 00:40:30.468	038c5eef-2466-4bab-9c74-1c7b17e8ef98
322	/shop/shop-non/1	2026-05-18 00:40:30.516	038c5eef-2466-4bab-9c74-1c7b17e8ef98
323	/shop/shop-non/3	2026-05-18 00:40:30.514	038c5eef-2466-4bab-9c74-1c7b17e8ef98
324	/shop/shop-non/5	2026-05-18 00:40:30.545	038c5eef-2466-4bab-9c74-1c7b17e8ef98
325	/shop/shop-non/4	2026-05-18 00:40:30.713	038c5eef-2466-4bab-9c74-1c7b17e8ef98
326	/shop/shop-non/2	2026-05-18 00:40:30.743	038c5eef-2466-4bab-9c74-1c7b17e8ef98
327	/shop/shop-non/1	2026-05-18 00:42:05.701	038c5eef-2466-4bab-9c74-1c7b17e8ef98
328	/shop/shop-non	2026-05-18 00:42:06.533	038c5eef-2466-4bab-9c74-1c7b17e8ef98
329	/shop/shop-non/4	2026-05-18 00:42:06.566	038c5eef-2466-4bab-9c74-1c7b17e8ef98
330	/shop/contact	2026-05-18 00:42:06.63	038c5eef-2466-4bab-9c74-1c7b17e8ef98
331	/shop/login	2026-05-18 00:42:06.637	038c5eef-2466-4bab-9c74-1c7b17e8ef98
332	/shop/shop-non/5	2026-05-18 00:42:06.604	038c5eef-2466-4bab-9c74-1c7b17e8ef98
333	/shop/cart	2026-05-18 00:42:06.632	038c5eef-2466-4bab-9c74-1c7b17e8ef98
334	/shop/shop-non/2	2026-05-18 00:42:06.656	038c5eef-2466-4bab-9c74-1c7b17e8ef98
335	/shop/shop-non/3	2026-05-18 00:42:06.683	038c5eef-2466-4bab-9c74-1c7b17e8ef98
336	/shop/contact	2026-05-18 00:45:48.113	038c5eef-2466-4bab-9c74-1c7b17e8ef98
337	/shop/shop-non	2026-05-18 01:11:24.606	e0a3eca0-c482-463a-b122-60f91c4f508f
338	/shop/cart	2026-05-18 01:11:24.677	de6771d9-be56-4392-b69a-64aa493cc879
339	/shop/cart	2026-05-18 01:11:25.641	de6771d9-be56-4392-b69a-64aa493cc879
340	/shop/cart	2026-05-18 01:11:25.816	de6771d9-be56-4392-b69a-64aa493cc879
341	/shop/shop-non	2026-05-18 01:11:25.604	e0a3eca0-c482-463a-b122-60f91c4f508f
342	/shop/cart	2026-05-18 01:11:25.941	de6771d9-be56-4392-b69a-64aa493cc879
343	/shop/cart	2026-05-18 01:11:26.889	de6771d9-be56-4392-b69a-64aa493cc879
344	/shop/cart	2026-05-18 01:25:32.969	5674f9a5-89d8-432b-aee9-cc25058905fb
345	/shop/cart	2026-05-18 01:25:33.131	5674f9a5-89d8-432b-aee9-cc25058905fb
346	/shop/cart	2026-05-18 01:25:33.016	5674f9a5-89d8-432b-aee9-cc25058905fb
347	/shop/shop-non	2026-05-18 01:25:33.061	5674f9a5-89d8-432b-aee9-cc25058905fb
348	/shop/cart	2026-05-18 01:25:33.184	5674f9a5-89d8-432b-aee9-cc25058905fb
349	/shop/cart	2026-05-18 01:25:33.259	5674f9a5-89d8-432b-aee9-cc25058905fb
350	/shop/cart	2026-05-18 01:25:33.262	5674f9a5-89d8-432b-aee9-cc25058905fb
351	/shop/cart	2026-05-18 01:25:33.423	5674f9a5-89d8-432b-aee9-cc25058905fb
352	/shop/shop-non	2026-05-18 01:25:33.482	5674f9a5-89d8-432b-aee9-cc25058905fb
353	/shop/cart	2026-05-18 01:25:34.698	5674f9a5-89d8-432b-aee9-cc25058905fb
354	/shop/shop-non	2026-05-18 01:25:34.72	5674f9a5-89d8-432b-aee9-cc25058905fb
355	/shop/cart	2026-05-18 02:25:35.176	00f5368b-e597-47a1-9a44-f8d1e55d70ce
356	/shop/shop-non	2026-05-18 02:25:35.322	a5e981ad-3440-4f78-86a6-94a377853366
357	/shop/cart	2026-05-18 02:25:36.371	00f5368b-e597-47a1-9a44-f8d1e55d70ce
358	/shop/cart	2026-05-18 02:25:36.396	00f5368b-e597-47a1-9a44-f8d1e55d70ce
359	/shop/cart	2026-05-18 02:25:35.904	00f5368b-e597-47a1-9a44-f8d1e55d70ce
360	/shop/cart	2026-05-18 02:25:36.923	a5e981ad-3440-4f78-86a6-94a377853366
361	/shop/shop-non	2026-05-18 02:25:37.37	a5e981ad-3440-4f78-86a6-94a377853366
362	/shop/cart	2026-05-18 02:25:37.381	a5e981ad-3440-4f78-86a6-94a377853366
363	/shop/home	2026-05-18 04:19:27.7	fb238653-d494-41d6-8605-1bbde6a19daf
364	/shop/home	2026-05-18 04:38:04.144	ed8cf1bd-c231-4038-ac61-12ace13b9d58
365	/shop/shop-non	2026-05-18 04:38:05.094	ed8cf1bd-c231-4038-ac61-12ace13b9d58
366	/shop/cart	2026-05-18 04:38:06.02	ed8cf1bd-c231-4038-ac61-12ace13b9d58
367	/shop/cart	2026-05-18 04:38:05.533	ed8cf1bd-c231-4038-ac61-12ace13b9d58
368	/shop/shop-non	2026-05-18 04:38:05.545	ed8cf1bd-c231-4038-ac61-12ace13b9d58
369	/shop/cart	2026-05-18 04:38:06.52	ed8cf1bd-c231-4038-ac61-12ace13b9d58
370	/shop/cart	2026-05-18 04:38:07	ed8cf1bd-c231-4038-ac61-12ace13b9d58
371	/shop/cart	2026-05-18 04:38:07.487	ed8cf1bd-c231-4038-ac61-12ace13b9d58
372	/shop/cart	2026-05-18 08:50:46.992	638eedf6-9306-4a8f-939f-f08cbe400491
373	/shop/cart	2026-05-18 08:50:47.03	638eedf6-9306-4a8f-939f-f08cbe400491
374	/shop/shop-non	2026-05-18 08:50:47.04	638eedf6-9306-4a8f-939f-f08cbe400491
375	/shop/cart	2026-05-18 08:50:47.066	638eedf6-9306-4a8f-939f-f08cbe400491
376	/shop/cart	2026-05-18 08:50:47.284	638eedf6-9306-4a8f-939f-f08cbe400491
377	/shop/cart	2026-05-18 08:50:47.396	638eedf6-9306-4a8f-939f-f08cbe400491
378	/shop/cart	2026-05-18 08:50:47.476	638eedf6-9306-4a8f-939f-f08cbe400491
379	/shop/cart	2026-05-18 08:50:47.631	638eedf6-9306-4a8f-939f-f08cbe400491
380	/shop/shop-non	2026-05-18 08:50:47.672	638eedf6-9306-4a8f-939f-f08cbe400491
381	/shop/shop-non	2026-05-18 08:50:48.66	638eedf6-9306-4a8f-939f-f08cbe400491
382	/shop/cart	2026-05-18 08:50:48.677	638eedf6-9306-4a8f-939f-f08cbe400491
383	/shop/cart	2026-05-18 08:57:51.582	638eedf6-9306-4a8f-939f-f08cbe400491
384	/shop/cart	2026-05-18 08:57:51.609	638eedf6-9306-4a8f-939f-f08cbe400491
385	/shop/cart	2026-05-18 08:57:51.635	638eedf6-9306-4a8f-939f-f08cbe400491
386	/shop/shop-non	2026-05-18 08:57:51.74	638eedf6-9306-4a8f-939f-f08cbe400491
387	/shop/cart	2026-05-18 08:57:51.78	638eedf6-9306-4a8f-939f-f08cbe400491
388	/shop/cart	2026-05-18 08:57:51.941	638eedf6-9306-4a8f-939f-f08cbe400491
389	/shop/cart	2026-05-18 08:57:51.952	638eedf6-9306-4a8f-939f-f08cbe400491
390	/shop/shop-non	2026-05-18 08:57:52.178	638eedf6-9306-4a8f-939f-f08cbe400491
391	/shop/cart	2026-05-18 08:57:51.598	638eedf6-9306-4a8f-939f-f08cbe400491
392	/shop/home	2026-05-18 09:06:26.6	1e57a9fd-7023-410f-8493-709e6f833c3c
393	/shop/None	2026-05-18 09:06:26.959	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
394	/shop/shop-non	2026-05-18 09:06:26.978	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
395	/shop/cart	2026-05-18 09:06:27.012	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
396	/shop/contact	2026-05-18 09:06:27.058	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
397	/shop/article	2026-05-18 09:06:27.73	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
398	/shop/home	2026-05-18 09:06:27.421	e7c6081f-4320-476e-a2b9-6131d4625a2a
399	/shop/home	2026-05-18 09:06:27.532	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
400	/shop/shop-non	2026-05-18 09:06:27.734	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
401	/shop/login	2026-05-18 09:06:27.818	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
402	/shop/cart	2026-05-18 09:06:28.503	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
403	/shop/contact	2026-05-18 09:06:28.802	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
404	/shop/cart	2026-05-18 09:06:28.48	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
405	/shop/cart	2026-05-18 09:06:28.497	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
406	/shop/contact	2026-05-18 09:06:28.513	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
407	/shop/home	2026-05-18 09:06:56.128	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
408	/shop/None	2026-05-18 09:06:56.27	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
409	/shop/cart	2026-05-18 09:06:56.463	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
410	/shop/shop-non	2026-05-18 09:06:56.523	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
411	/shop/cart	2026-05-18 09:06:56.507	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
412	/shop/contact	2026-05-18 09:06:56.545	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
413	/shop/cart	2026-05-18 09:06:56.78	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
414	/shop/login	2026-05-18 09:06:56.762	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
415	/shop/article	2026-05-18 09:06:56.782	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
416	/shop/contact	2026-05-18 09:06:56.764	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
417	/shop/cart	2026-05-18 09:06:56.867	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
418	/shop/contact	2026-05-18 09:06:56.874	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
419	/shop/cart	2026-05-18 09:06:56.857	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
420	/shop/cart	2026-05-18 09:06:56.893	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
421	/shop/cart	2026-05-18 09:06:56.956	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
422	/shop/cart	2026-05-18 09:06:57.844	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
423	/shop/contact	2026-05-18 09:07:03.733	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
424	/shop/shop-non	2026-05-18 09:07:03.767	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
425	/shop/shop-non	2026-05-18 09:07:04.623	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
426	/shop/shop-non	2026-05-18 09:07:05.711	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
427	/shop/login	2026-05-18 09:07:05.711	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
428	/shop/shop-non/5	2026-05-18 09:07:05.713	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
429	/shop/article	2026-05-18 09:07:05.723	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
430	/shop/shop-non/1	2026-05-18 09:07:05.726	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
431	/shop/shop-non/4	2026-05-18 09:07:05.844	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
432	/shop/shop-non	2026-05-18 09:07:05.863	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
433	/shop/shop-non	2026-05-18 09:07:06.124	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
434	/shop/shop-non/5	2026-05-18 09:07:06.28	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
435	/shop/contact	2026-05-18 09:07:05.754	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
436	/shop/shop-non/3	2026-05-18 09:07:05.811	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
437	/shop/shop-non/3	2026-05-18 09:07:06.464	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
438	/shop/shop-non/4	2026-05-18 09:07:06.549	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
439	/shop/shop-non/2	2026-05-18 09:07:06.621	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
440	/shop/shop-non/2	2026-05-18 09:07:06.28	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
441	/shop/shop-non/1	2026-05-18 09:07:06.314	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
442	/shop/article	2026-05-18 09:07:12.699	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
443	/shop/article	2026-05-18 09:07:12.718	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
444	/shop/home	2026-05-18 09:07:21.402	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
445	/shop/contact	2026-05-18 09:07:21.727	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
446	/shop/shop-non	2026-05-18 09:07:21.771	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
447	/shop/cart	2026-05-18 09:07:21.963	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
448	/shop/None	2026-05-18 09:07:21.507	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
451	/shop/cart	2026-05-18 09:07:21.769	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
452	/shop/article	2026-05-18 09:07:21.823	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
453	/shop/cart	2026-05-18 09:07:21.842	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
454	/shop/cart	2026-05-18 09:07:21.965	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
455	/shop/cart	2026-05-18 09:07:21.995	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
456	/shop/shop-non	2026-05-18 09:07:22.074	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
457	/shop/contact	2026-05-18 09:07:22.095	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
458	/shop/contact	2026-05-18 09:07:22.1	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
459	/shop/contact	2026-05-18 09:07:28.144	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
460	/shop/login	2026-05-18 09:07:28.149	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
461	/shop/article	2026-05-18 09:07:28.161	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
462	/shop/shop-non	2026-05-18 09:08:00.684	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
463	/shop/login	2026-05-18 09:08:00.696	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
449	/shop/cart	2026-05-18 09:07:22.117	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
450	/shop/login	2026-05-18 09:07:21.742	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
464	/shop/article	2026-05-18 09:08:00.703	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
465	/shop/shop-non/3	2026-05-18 09:08:00.779	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
466	/shop/shop-non/4	2026-05-18 09:08:00.904	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
467	/shop/shop-non/2	2026-05-18 09:08:00.946	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
468	/shop/shop-non/5	2026-05-18 09:08:01.01	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
469	/shop/shop-non/1	2026-05-18 09:08:01.143	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
470	/shop/shop-non/3	2026-05-18 09:08:01.178	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
471	/shop/shop-non/2	2026-05-18 09:09:04.965	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
472	/shop/shop-non/4	2026-05-18 09:09:04.965	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
473	/shop/shop-non/4	2026-05-18 09:09:06.706	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
474	/shop/login	2026-05-18 09:09:06.702	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
475	/shop/article	2026-05-18 09:09:06.74	c9c9c3e2-41f5-47c1-8eba-68ed7506cb1a
476	/shop/home	2026-05-18 10:11:04.595	b7d3bf84-da5e-463b-91fd-dbd15d00fef9
477	/shop/home	2026-05-18 11:39:37.564	fe88aee5-b6b4-401d-8a03-b4a24de667d1
478	/shop/cart	2026-05-18 11:39:37.997	fe88aee5-b6b4-401d-8a03-b4a24de667d1
479	/shop/None	2026-05-18 11:39:38.24	fe88aee5-b6b4-401d-8a03-b4a24de667d1
480	/shop/shop-non	2026-05-18 11:39:38.23	fe88aee5-b6b4-401d-8a03-b4a24de667d1
481	/shop/cart	2026-05-18 11:39:38.293	fe88aee5-b6b4-401d-8a03-b4a24de667d1
482	/shop/cart	2026-05-18 11:39:38.31	fe88aee5-b6b4-401d-8a03-b4a24de667d1
483	/shop/cart	2026-05-18 11:39:38.35	fe88aee5-b6b4-401d-8a03-b4a24de667d1
484	/shop/cart	2026-05-18 11:39:38.405	fe88aee5-b6b4-401d-8a03-b4a24de667d1
485	/shop/shop-non	2026-05-18 11:39:41.458	fe88aee5-b6b4-401d-8a03-b4a24de667d1
486	/shop/article	2026-05-18 11:39:41.491	fe88aee5-b6b4-401d-8a03-b4a24de667d1
487	/shop/contact	2026-05-18 11:39:41.569	fe88aee5-b6b4-401d-8a03-b4a24de667d1
488	/shop/login	2026-05-18 11:39:41.59	fe88aee5-b6b4-401d-8a03-b4a24de667d1
489	/shop/contact	2026-05-18 11:39:41.553	fe88aee5-b6b4-401d-8a03-b4a24de667d1
490	/shop/contact	2026-05-18 11:39:41.571	fe88aee5-b6b4-401d-8a03-b4a24de667d1
491	/shop/home	2026-05-18 12:11:12.294	49ec7492-0563-47ee-8eba-ea8135a980c9
492	/shop/home	2026-05-18 12:18:59.285	2730da21-5fb6-4f92-8180-c6b70fa6e865
493	/shop/cart	2026-05-18 12:18:59.356	2730da21-5fb6-4f92-8180-c6b70fa6e865
494	/shop/cart	2026-05-18 12:18:59.391	2730da21-5fb6-4f92-8180-c6b70fa6e865
495	/shop/cart	2026-05-18 12:18:59.429	2730da21-5fb6-4f92-8180-c6b70fa6e865
496	/shop/None	2026-05-18 12:19:00.167	2730da21-5fb6-4f92-8180-c6b70fa6e865
497	/shop/shop-non	2026-05-18 12:19:00.194	2730da21-5fb6-4f92-8180-c6b70fa6e865
498	/shop/cart	2026-05-18 12:19:00.247	2730da21-5fb6-4f92-8180-c6b70fa6e865
499	/shop/shop-non	2026-05-18 12:19:00.46	2730da21-5fb6-4f92-8180-c6b70fa6e865
500	/shop/cart	2026-05-18 12:19:00.432	2730da21-5fb6-4f92-8180-c6b70fa6e865
501	/shop/article	2026-05-18 12:19:19.313	2730da21-5fb6-4f92-8180-c6b70fa6e865
502	/shop/login	2026-05-18 12:19:19.362	2730da21-5fb6-4f92-8180-c6b70fa6e865
503	/shop/contact	2026-05-18 12:19:19.406	2730da21-5fb6-4f92-8180-c6b70fa6e865
504	/shop/contact	2026-05-18 12:19:22.542	2730da21-5fb6-4f92-8180-c6b70fa6e865
505	/shop/shop-non	2026-05-18 12:19:22.538	2730da21-5fb6-4f92-8180-c6b70fa6e865
506	/shop/shop-non/1	2026-05-18 12:19:23.893	2730da21-5fb6-4f92-8180-c6b70fa6e865
507	/shop/contact	2026-05-18 12:19:23.91	2730da21-5fb6-4f92-8180-c6b70fa6e865
508	/shop/shop-non/1	2026-05-18 12:19:24.154	2730da21-5fb6-4f92-8180-c6b70fa6e865
509	/shop/shop-non/4	2026-05-18 12:19:24.402	2730da21-5fb6-4f92-8180-c6b70fa6e865
510	/shop/shop-non/5	2026-05-18 12:19:23.921	2730da21-5fb6-4f92-8180-c6b70fa6e865
511	/shop/shop-non/3	2026-05-18 12:19:24.312	2730da21-5fb6-4f92-8180-c6b70fa6e865
512	/shop/shop-non/5	2026-05-18 12:19:24.388	2730da21-5fb6-4f92-8180-c6b70fa6e865
513	/shop/shop-non/3	2026-05-18 12:19:24.402	2730da21-5fb6-4f92-8180-c6b70fa6e865
514	/shop/shop-non/2	2026-05-18 12:19:24.414	2730da21-5fb6-4f92-8180-c6b70fa6e865
515	/shop/shop-non/2	2026-05-18 12:19:33.333	2730da21-5fb6-4f92-8180-c6b70fa6e865
516	/shop/cart	2026-05-18 12:19:33.37	2730da21-5fb6-4f92-8180-c6b70fa6e865
517	/shop/cart	2026-05-18 12:19:35.306	2730da21-5fb6-4f92-8180-c6b70fa6e865
518	/shop/cart	2026-05-18 12:41:16.484	557be4c0-ba25-4b70-9ca0-fada79ecc871
519	/shop/shop-non	2026-05-18 12:41:16.54	557be4c0-ba25-4b70-9ca0-fada79ecc871
520	/shop/contact	2026-05-18 12:41:16.579	557be4c0-ba25-4b70-9ca0-fada79ecc871
521	/shop/contact	2026-05-18 12:41:16.62	557be4c0-ba25-4b70-9ca0-fada79ecc871
522	/shop/article	2026-05-18 12:41:16.975	557be4c0-ba25-4b70-9ca0-fada79ecc871
523	/shop/None	2026-05-18 12:41:16.969	557be4c0-ba25-4b70-9ca0-fada79ecc871
524	/shop/contact	2026-05-18 12:41:16.973	557be4c0-ba25-4b70-9ca0-fada79ecc871
525	/shop/cart	2026-05-18 12:41:17.006	557be4c0-ba25-4b70-9ca0-fada79ecc871
526	/shop/cart	2026-05-18 12:41:17.005	557be4c0-ba25-4b70-9ca0-fada79ecc871
527	/shop/login	2026-05-18 12:41:17.038	557be4c0-ba25-4b70-9ca0-fada79ecc871
528	/shop/cart	2026-05-18 12:41:17.051	557be4c0-ba25-4b70-9ca0-fada79ecc871
529	/shop/shop-non	2026-05-18 12:41:17.045	557be4c0-ba25-4b70-9ca0-fada79ecc871
530	/shop/contact	2026-05-18 12:41:22.289	557be4c0-ba25-4b70-9ca0-fada79ecc871
531	/shop/cart	2026-05-18 12:41:22.292	557be4c0-ba25-4b70-9ca0-fada79ecc871
532	/shop/cart	2026-05-18 12:41:22.286	557be4c0-ba25-4b70-9ca0-fada79ecc871
533	/shop/None	2026-05-18 12:41:22.29	557be4c0-ba25-4b70-9ca0-fada79ecc871
534	/shop/cart	2026-05-18 12:41:22.329	557be4c0-ba25-4b70-9ca0-fada79ecc871
535	/shop/contact	2026-05-18 12:41:22.316	557be4c0-ba25-4b70-9ca0-fada79ecc871
536	/shop/login	2026-05-18 12:41:22.341	557be4c0-ba25-4b70-9ca0-fada79ecc871
537	/shop/cart	2026-05-18 12:41:22.325	557be4c0-ba25-4b70-9ca0-fada79ecc871
538	/shop/cart	2026-05-18 12:41:22.358	557be4c0-ba25-4b70-9ca0-fada79ecc871
539	/shop/cart	2026-05-18 12:41:22.376	557be4c0-ba25-4b70-9ca0-fada79ecc871
540	/shop/cart	2026-05-18 12:41:22.396	557be4c0-ba25-4b70-9ca0-fada79ecc871
541	/shop/contact	2026-05-18 12:41:22.433	557be4c0-ba25-4b70-9ca0-fada79ecc871
542	/shop/contact	2026-05-18 12:41:22.423	557be4c0-ba25-4b70-9ca0-fada79ecc871
543	/shop/shop-non	2026-05-18 12:41:22.425	557be4c0-ba25-4b70-9ca0-fada79ecc871
544	/shop/cart	2026-05-18 12:41:22.439	557be4c0-ba25-4b70-9ca0-fada79ecc871
545	/shop/shop-non	2026-05-18 12:41:30.05	557be4c0-ba25-4b70-9ca0-fada79ecc871
546	/shop/article	2026-05-18 12:41:48.58	557be4c0-ba25-4b70-9ca0-fada79ecc871
547	/shop/contact	2026-05-18 12:41:49.095	557be4c0-ba25-4b70-9ca0-fada79ecc871
548	/shop/home	2026-05-18 12:51:17.238	557be4c0-ba25-4b70-9ca0-fada79ecc871
549	/shop/shop-non/4	2026-05-18 13:32:15.211	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
550	/shop/home	2026-05-18 13:32:39.622	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
551	/shop/contact	2026-05-18 13:32:39.781	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
552	/shop/cart	2026-05-18 13:32:39.79	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
553	/shop/article	2026-05-18 13:32:39.795	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
554	/shop/login	2026-05-18 13:32:39.837	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
555	/shop/cart	2026-05-18 13:32:39.949	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
556	/shop/cart	2026-05-18 13:32:39.961	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
557	/shop/cart	2026-05-18 13:32:40	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
558	/shop/shop-non	2026-05-18 13:32:40.02	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
559	/shop/contact	2026-05-18 13:32:40.104	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
560	/shop/cart	2026-05-18 13:32:40.081	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
561	/shop/shop-non	2026-05-18 13:32:55.989	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
562	/shop/contact	2026-05-18 13:32:55.98	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
563	/shop/shop-non	2026-05-18 13:32:56.804	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
564	/shop/shop-non/1	2026-05-18 13:32:57.245	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
565	/shop/shop-non	2026-05-18 13:32:57.449	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
566	/shop/shop-non/5	2026-05-18 13:32:57.464	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
567	/shop/article	2026-05-18 13:32:57.267	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
568	/shop/contact	2026-05-18 13:32:57.261	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
569	/shop/login	2026-05-18 13:32:57.311	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
570	/shop/shop-non/4	2026-05-18 13:32:57.451	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
571	/shop/shop-non/2	2026-05-18 13:32:57.478	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
572	/shop/shop-non/5	2026-05-18 13:32:57.514	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
573	/shop/shop-non/1	2026-05-18 13:32:57.718	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
574	/shop/shop-non/3	2026-05-18 13:32:57.762	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
575	/shop/shop-non/2	2026-05-18 13:32:57.943	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
576	/shop/shop-non/3	2026-05-18 13:32:57.924	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
577	/shop/shop-non/4	2026-05-18 13:32:57.923	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
578	/shop/login	2026-05-18 13:33:05.581	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
579	/shop/article	2026-05-18 13:33:05.601	d3fa99d2-50bc-4c4c-8de1-4ed53e79e461
580	/shop/contact	2026-05-18 14:16:41.771	80a550ce-41c3-4246-b87d-8cac27972fa0
581	/shop/shop-non	2026-05-18 14:16:42.563	80a550ce-41c3-4246-b87d-8cac27972fa0
582	/shop/home	2026-05-18 14:16:42.686	80a550ce-41c3-4246-b87d-8cac27972fa0
583	/shop/contact	2026-05-18 14:16:58.489	80a550ce-41c3-4246-b87d-8cac27972fa0
584	/shop/cart	2026-05-18 14:16:58.527	80a550ce-41c3-4246-b87d-8cac27972fa0
585	/shop/contact	2026-05-18 14:16:59.541	9fe50e15-2abc-4efd-994b-3c803147ac60
586	/shop/contact	2026-05-18 14:16:59.059	80a550ce-41c3-4246-b87d-8cac27972fa0
587	/shop/contact	2026-05-18 14:17:06.861	80a550ce-41c3-4246-b87d-8cac27972fa0
588	/shop/contact	2026-05-18 14:17:07.234	8660fe94-cbe0-4132-9f78-2953ce0a1201
589	/shop/shop-non/3	2026-05-18 14:17:13.774	80a550ce-41c3-4246-b87d-8cac27972fa0
590	/shop/shop-non/4	2026-05-18 14:17:13.812	80a550ce-41c3-4246-b87d-8cac27972fa0
591	/shop/shop-non/5	2026-05-18 14:17:13.855	80a550ce-41c3-4246-b87d-8cac27972fa0
592	/shop/shop-non/2	2026-05-18 14:17:13.813	80a550ce-41c3-4246-b87d-8cac27972fa0
593	/shop/home	2026-05-18 14:21:06.574	896feba7-3c83-490b-82f9-cbb549ca328d
594	/shop/shop-non/1	2026-05-18 14:21:18.866	80a550ce-41c3-4246-b87d-8cac27972fa0
595	/shop/contact	2026-05-18 21:51:22.044	ba3d98f7-f8b6-4c30-ae2c-023ebe9d8228
596	/shop/contact	2026-05-19 05:02:29.424	c25ad8ee-630c-41fb-8346-703d96b5e602
597	/shop/article	2026-05-19 05:02:30.323	c25ad8ee-630c-41fb-8346-703d96b5e602
598	/shop/login	2026-05-19 05:02:30.314	c25ad8ee-630c-41fb-8346-703d96b5e602
599	/shop/cart	2026-05-19 05:02:30.322	c25ad8ee-630c-41fb-8346-703d96b5e602
600	/shop/contact	2026-05-19 05:02:30.34	c25ad8ee-630c-41fb-8346-703d96b5e602
601	/shop/contact	2026-05-19 05:02:30.333	c25ad8ee-630c-41fb-8346-703d96b5e602
602	/shop/cart	2026-05-19 05:02:30.351	c25ad8ee-630c-41fb-8346-703d96b5e602
603	/shop/cart	2026-05-19 05:02:30.378	c25ad8ee-630c-41fb-8346-703d96b5e602
604	/shop/cart	2026-05-19 05:02:30.418	c25ad8ee-630c-41fb-8346-703d96b5e602
605	/shop/contact	2026-05-19 05:02:30.502	c25ad8ee-630c-41fb-8346-703d96b5e602
606	/shop/shop-non	2026-05-19 05:02:33.838	c25ad8ee-630c-41fb-8346-703d96b5e602
607	/shop/shop-non	2026-05-19 05:02:33.843	c25ad8ee-630c-41fb-8346-703d96b5e602
608	/shop/contact	2026-05-19 05:02:35.086	c25ad8ee-630c-41fb-8346-703d96b5e602
609	/shop/shop-non/5	2026-05-19 05:02:35.108	c25ad8ee-630c-41fb-8346-703d96b5e602
610	/shop/cart	2026-05-19 05:02:35.132	c25ad8ee-630c-41fb-8346-703d96b5e602
611	/shop/shop-non/4	2026-05-19 05:02:35.342	c25ad8ee-630c-41fb-8346-703d96b5e602
612	/shop/shop-non/1	2026-05-19 05:02:35.375	c25ad8ee-630c-41fb-8346-703d96b5e602
613	/shop/shop-non/3	2026-05-19 05:02:35.56	c25ad8ee-630c-41fb-8346-703d96b5e602
614	/shop/shop-non/4	2026-05-19 05:02:35.572	c25ad8ee-630c-41fb-8346-703d96b5e602
615	/shop/shop-non/2	2026-05-19 05:02:35.581	c25ad8ee-630c-41fb-8346-703d96b5e602
616	/shop/shop-non/1	2026-05-19 05:02:35.122	c25ad8ee-630c-41fb-8346-703d96b5e602
617	/shop/article	2026-05-19 05:02:35.11	c25ad8ee-630c-41fb-8346-703d96b5e602
618	/shop/shop-non/3	2026-05-19 05:02:35.156	c25ad8ee-630c-41fb-8346-703d96b5e602
619	/shop/shop-non	2026-05-19 05:02:35.253	c25ad8ee-630c-41fb-8346-703d96b5e602
620	/shop/shop-non/2	2026-05-19 05:02:35.356	c25ad8ee-630c-41fb-8346-703d96b5e602
621	/shop/shop-non/5	2026-05-19 05:02:35.376	c25ad8ee-630c-41fb-8346-703d96b5e602
622	/shop/contact	2026-05-19 05:30:01.005	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
623	/shop/cart	2026-05-19 05:30:01.032	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
624	/shop/shop-non	2026-05-19 05:30:01.058	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
625	/shop/cart	2026-05-19 05:30:01.252	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
626	/shop/cart	2026-05-19 05:30:01.291	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
627	/shop/contact	2026-05-19 05:30:01.319	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
628	/shop/contact	2026-05-19 05:30:01.368	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
629	/shop/article	2026-05-19 05:30:02.001	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
630	/shop/cart	2026-05-19 05:30:01.99	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
631	/shop/login	2026-05-19 05:30:01.98	8cfc3a03-4aef-47b0-a02d-54ac6a8a9597
632	/shop/shop-non	2026-05-19 06:23:42.361	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
633	/shop/shop-non/4	2026-05-19 06:23:42.379	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
634	/shop/article	2026-05-19 06:23:42.45	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
635	/shop/contact	2026-05-19 06:23:42.68	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
636	/shop/cart	2026-05-19 06:23:42.701	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
637	/shop/cart	2026-05-19 06:23:43.535	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
638	/shop/cart	2026-05-19 06:23:42.995	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
639	/shop/cart	2026-05-19 06:23:42.971	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
640	/shop/contact	2026-05-19 06:23:43.278	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
641	/shop/contact	2026-05-19 06:23:43.891	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
642	/shop/contact	2026-05-19 06:23:44.013	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
643	/shop/login	2026-05-19 06:23:44.087	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
644	/shop/shop-non	2026-05-19 06:23:51.33	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
645	/shop/home	2026-05-19 06:23:51.33	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
646	/shop/None	2026-05-19 06:23:51.936	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
647	/shop/contact	2026-05-19 06:23:51.958	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
648	/shop/article	2026-05-19 06:23:51.978	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
649	/shop/home	2026-05-19 06:23:56.593	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
650	/shop/cart	2026-05-19 06:23:56.99	67c2e33d-469c-46d1-8a4e-58e72dbae0f9
651	/shop/None	2026-05-19 06:23:57.031	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
652	/shop/article	2026-05-19 06:23:57.324	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
653	/shop/cart	2026-05-19 06:23:57.353	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
654	/shop/contact	2026-05-19 06:23:57.47	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
655	/shop/contact	2026-05-19 06:23:57.542	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
656	/shop/login	2026-05-19 06:23:57.037	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
657	/shop/contact	2026-05-19 06:23:57.164	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
658	/shop/cart	2026-05-19 06:23:57.208	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
659	/shop/cart	2026-05-19 06:23:57.347	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
660	/shop/cart	2026-05-19 06:23:57.332	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
661	/shop/cart	2026-05-19 06:23:57.369	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
662	/shop/shop-non	2026-05-19 06:23:57.467	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
663	/shop/cart	2026-05-19 06:23:57.462	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
664	/shop/shop-non	2026-05-19 06:24:01.818	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
665	/shop/login	2026-05-19 06:24:01.833	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
666	/shop/contact	2026-05-19 06:24:01.837	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
667	/shop/home	2026-05-19 06:24:39.877	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
668	/shop/contact	2026-05-19 06:24:39.913	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
669	/shop/article	2026-05-19 06:24:39.931	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
670	/shop/cart	2026-05-19 06:24:39.964	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
671	/shop/cart	2026-05-19 06:24:39.999	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
672	/shop/shop-non	2026-05-19 06:24:39.96	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
673	/shop/cart	2026-05-19 06:24:40.071	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
674	/shop/cart	2026-05-19 06:24:40.056	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
675	/shop/cart	2026-05-19 06:24:40.116	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
676	/shop/shop-non	2026-05-19 06:24:40.153	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
677	/shop/contact	2026-05-19 06:24:40.172	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
678	/shop/shop-non	2026-05-19 06:24:48.22	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
679	/shop/contact	2026-05-19 06:24:48.26	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
680	/shop/contact	2026-05-19 06:24:49.449	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
681	/shop/shop-non/4	2026-05-19 06:24:49.523	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
682	/shop/shop-non/5	2026-05-19 06:24:49.437	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
683	/shop/login	2026-05-19 06:24:49.458	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
684	/shop/None	2026-05-19 06:24:49.488	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
685	/shop/cart	2026-05-19 06:24:49.467	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
686	/shop/login	2026-05-19 06:24:49.474	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
687	/shop/shop-non/1	2026-05-19 06:24:49.474	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
688	/shop/shop-non/3	2026-05-19 06:24:49.701	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
689	/shop/shop-non/2	2026-05-19 06:24:49.716	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
690	/shop/shop-non/5	2026-05-19 06:24:49.765	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
691	/shop/shop-non/1	2026-05-19 06:24:49.766	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
692	/shop/shop-non/3	2026-05-19 06:24:49.947	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
693	/shop/shop-non/4	2026-05-19 06:24:50.007	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
694	/shop/shop-non/2	2026-05-19 06:24:59.793	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
695	/shop/shop-non	2026-05-19 06:24:59.81	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
696	/shop/article	2026-05-19 06:25:01.33	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
697	/shop/login	2026-05-19 06:25:01.215	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
698	/shop/article	2026-05-19 06:25:05.93	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
699	/shop/login	2026-05-19 06:25:06.305	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
700	/shop/article	2026-05-19 06:25:40.401	748eab7f-376e-4b7e-857f-1bafa4ae4ce3
701	/shop/login	2026-05-19 08:46:00.302	45764196-b09b-4c45-9a4a-4477779e4092
702	/shop/cart	2026-05-19 08:46:00.982	45764196-b09b-4c45-9a4a-4477779e4092
703	/shop/cart	2026-05-19 08:46:00.983	45764196-b09b-4c45-9a4a-4477779e4092
704	/shop/cart	2026-05-19 08:46:00.991	45764196-b09b-4c45-9a4a-4477779e4092
705	/shop/article	2026-05-19 08:46:00.987	45764196-b09b-4c45-9a4a-4477779e4092
706	/shop/cart	2026-05-19 08:46:01.023	45764196-b09b-4c45-9a4a-4477779e4092
707	/shop/home	2026-05-19 09:47:24.004	3b2d9d32-df16-413e-b78e-39fa75a1d95a
708	/shop/home	2026-05-19 09:50:45.949	d79a039f-a8e6-4e40-8bcc-c79e55fb73ef
709	/shop/home	2026-05-19 10:12:09.111	a54b1592-31af-4851-a8d2-d412b2a6c8eb
710	/shop/home	2026-05-19 11:18:38.9	df457742-1069-4bc8-879d-95446168b7be
711	/shop/cart	2026-05-19 11:18:39.177	df457742-1069-4bc8-879d-95446168b7be
712	/shop/cart	2026-05-19 11:18:39.223	df457742-1069-4bc8-879d-95446168b7be
713	/shop/cart	2026-05-19 11:18:39.271	df457742-1069-4bc8-879d-95446168b7be
714	/shop/None	2026-05-19 11:18:39.741	df457742-1069-4bc8-879d-95446168b7be
715	/shop/cart	2026-05-19 11:18:39.832	df457742-1069-4bc8-879d-95446168b7be
716	/shop/shop-non	2026-05-19 11:18:39.916	df457742-1069-4bc8-879d-95446168b7be
717	/shop/cart	2026-05-19 11:18:39.957	df457742-1069-4bc8-879d-95446168b7be
718	/shop/shop-non	2026-05-19 11:19:07.024	df457742-1069-4bc8-879d-95446168b7be
719	/shop/home	2026-05-19 11:19:07.135	50014807-fc56-4774-88e2-86112d07bde7
720	/shop/shop-non	2026-05-19 11:19:07.796	50014807-fc56-4774-88e2-86112d07bde7
721	/shop/None	2026-05-19 11:19:07.258	50014807-fc56-4774-88e2-86112d07bde7
722	/shop/shop-non	2026-05-19 11:19:07.459	50014807-fc56-4774-88e2-86112d07bde7
723	/shop/cart	2026-05-19 11:19:07.735	50014807-fc56-4774-88e2-86112d07bde7
724	/shop/cart	2026-05-19 11:19:07.712	50014807-fc56-4774-88e2-86112d07bde7
725	/shop/cart	2026-05-19 11:19:07.744	50014807-fc56-4774-88e2-86112d07bde7
726	/shop/cart	2026-05-19 11:19:07.774	50014807-fc56-4774-88e2-86112d07bde7
727	/shop/cart	2026-05-19 11:19:07.801	50014807-fc56-4774-88e2-86112d07bde7
728	/shop/shop-non	2026-05-19 11:19:11.256	50014807-fc56-4774-88e2-86112d07bde7
729	/shop/shop-non/5	2026-05-19 11:19:12.623	50014807-fc56-4774-88e2-86112d07bde7
730	/shop/cart	2026-05-19 11:19:12.678	50014807-fc56-4774-88e2-86112d07bde7
731	/shop/shop-non/3	2026-05-19 11:19:12.688	50014807-fc56-4774-88e2-86112d07bde7
732	/shop/shop-non/2	2026-05-19 11:19:12.869	50014807-fc56-4774-88e2-86112d07bde7
733	/shop/shop-non/4	2026-05-19 11:19:13.152	50014807-fc56-4774-88e2-86112d07bde7
734	/shop/shop-non/3	2026-05-19 11:19:13.187	50014807-fc56-4774-88e2-86112d07bde7
735	/shop/shop-non/5	2026-05-19 11:19:12.901	50014807-fc56-4774-88e2-86112d07bde7
736	/shop/shop-non/1	2026-05-19 11:19:13.554	50014807-fc56-4774-88e2-86112d07bde7
737	/shop/None	2026-05-19 11:19:15.585	50014807-fc56-4774-88e2-86112d07bde7
738	/shop/shop-non	2026-05-19 11:19:17.888	50014807-fc56-4774-88e2-86112d07bde7
739	/shop/shop-non	2026-05-19 11:19:18.46	50014807-fc56-4774-88e2-86112d07bde7
740	/shop/None	2026-05-19 11:19:24.85	50014807-fc56-4774-88e2-86112d07bde7
741	/shop/home	2026-05-19 11:19:29.395	db154112-f363-42ee-98e2-6d1e619eecc8
742	/shop/contact	2026-05-19 11:19:29.392	db154112-f363-42ee-98e2-6d1e619eecc8
743	/shop/shop-non	2026-05-19 11:19:29.389	db154112-f363-42ee-98e2-6d1e619eecc8
744	/shop/None	2026-05-19 11:19:29.413	db154112-f363-42ee-98e2-6d1e619eecc8
745	/shop/cart	2026-05-19 11:19:29.454	db154112-f363-42ee-98e2-6d1e619eecc8
746	/shop/login	2026-05-19 11:19:29.447	db154112-f363-42ee-98e2-6d1e619eecc8
747	/shop/contact	2026-05-19 11:19:30.18	db154112-f363-42ee-98e2-6d1e619eecc8
748	/shop/cart	2026-05-19 11:19:30.286	50014807-fc56-4774-88e2-86112d07bde7
749	/shop/contact	2026-05-19 11:19:29.761	db154112-f363-42ee-98e2-6d1e619eecc8
750	/shop/article	2026-05-19 11:19:29.79	db154112-f363-42ee-98e2-6d1e619eecc8
751	/shop/None	2026-05-19 11:19:29.96	50014807-fc56-4774-88e2-86112d07bde7
752	/shop/shop-non/4	2026-05-19 11:19:29.97	50014807-fc56-4774-88e2-86112d07bde7
753	/shop/shop-non/2	2026-05-19 11:19:29.981	50014807-fc56-4774-88e2-86112d07bde7
754	/shop/cart	2026-05-19 11:19:30.081	50014807-fc56-4774-88e2-86112d07bde7
755	/shop/cart	2026-05-19 11:19:30.09	50014807-fc56-4774-88e2-86112d07bde7
756	/shop/home	2026-05-19 11:19:29.769	50014807-fc56-4774-88e2-86112d07bde7
757	/shop/shop-non	2026-05-19 11:19:30.088	50014807-fc56-4774-88e2-86112d07bde7
758	/shop/cart	2026-05-19 11:19:29.983	50014807-fc56-4774-88e2-86112d07bde7
760	/shop/cart	2026-05-19 11:19:31.176	db154112-f363-42ee-98e2-6d1e619eecc8
759	/shop/shop-non	2026-05-19 11:19:31.174	db154112-f363-42ee-98e2-6d1e619eecc8
761	/shop/shop-non	2026-05-19 11:22:12.057	50014807-fc56-4774-88e2-86112d07bde7
762	/shop/cart	2026-05-19 11:41:14.057	50014807-fc56-4774-88e2-86112d07bde7
763	/shop/home	2026-05-19 11:41:14.045	50014807-fc56-4774-88e2-86112d07bde7
764	/shop/shop-non	2026-05-19 11:41:14.113	50014807-fc56-4774-88e2-86112d07bde7
765	/shop/cart	2026-05-19 11:41:14.209	50014807-fc56-4774-88e2-86112d07bde7
766	/shop/None	2026-05-19 11:41:14.985	50014807-fc56-4774-88e2-86112d07bde7
767	/shop/cart	2026-05-19 11:41:15.023	50014807-fc56-4774-88e2-86112d07bde7
768	/shop/cart	2026-05-19 11:41:15.281	50014807-fc56-4774-88e2-86112d07bde7
769	/shop/shop-non	2026-05-19 11:41:16.21	50014807-fc56-4774-88e2-86112d07bde7
770	/shop/shop-non	2026-05-19 11:41:17.47	50014807-fc56-4774-88e2-86112d07bde7
771	/shop/cart	2026-05-19 11:41:17.485	50014807-fc56-4774-88e2-86112d07bde7
772	/shop/shop-non/5	2026-05-19 11:41:17.493	50014807-fc56-4774-88e2-86112d07bde7
773	/shop/shop-non/4	2026-05-19 11:41:17.517	50014807-fc56-4774-88e2-86112d07bde7
774	/shop/shop-non/2	2026-05-19 11:41:17.782	50014807-fc56-4774-88e2-86112d07bde7
775	/shop/shop-non	2026-05-19 11:41:17.801	50014807-fc56-4774-88e2-86112d07bde7
776	/shop/shop-non/1	2026-05-19 11:41:17.915	50014807-fc56-4774-88e2-86112d07bde7
777	/shop/shop-non/3	2026-05-19 11:41:18.037	50014807-fc56-4774-88e2-86112d07bde7
778	/shop/shop-non/1	2026-05-19 11:41:17.69	50014807-fc56-4774-88e2-86112d07bde7
779	/shop/shop-non/5	2026-05-19 11:41:18.04	50014807-fc56-4774-88e2-86112d07bde7
780	/shop/shop-non/4	2026-05-19 11:41:18.444	50014807-fc56-4774-88e2-86112d07bde7
781	/shop/shop-non/3	2026-05-19 11:41:19.61	50014807-fc56-4774-88e2-86112d07bde7
782	/shop/cart	2026-05-19 11:41:19.626	50014807-fc56-4774-88e2-86112d07bde7
783	/shop/cart	2026-05-19 11:41:21.251	50014807-fc56-4774-88e2-86112d07bde7
784	/shop/cart	2026-05-19 11:42:08.087	50014807-fc56-4774-88e2-86112d07bde7
785	/shop/home	2026-05-19 12:16:49.43	b41a41b1-6777-4cca-bfa6-b04d48157b3b
786	/shop/contact	2026-05-19 12:57:24.796	e13e17d8-9c84-448d-bbf2-cec7eb65df88
787	/shop/home	2026-05-19 20:27:13.612	b5f03ff2-b094-4566-9546-90718f114315
788	/shop/login	2026-05-19 20:27:18.777	b5f03ff2-b094-4566-9546-90718f114315
789	/shop/contact	2026-05-19 20:27:19.737	b5f03ff2-b094-4566-9546-90718f114315
790	/shop/contact	2026-05-19 20:27:33.995	b5f03ff2-b094-4566-9546-90718f114315
791	/shop/shop-non	2026-05-19 20:27:34.095	b5f03ff2-b094-4566-9546-90718f114315
792	/shop/cart	2026-05-19 20:27:48.633	b5f03ff2-b094-4566-9546-90718f114315
793	/shop/cart	2026-05-19 20:27:50.01	b5f03ff2-b094-4566-9546-90718f114315
794	/shop/cart	2026-05-19 20:27:51.418	b5f03ff2-b094-4566-9546-90718f114315
795	/shop/article	2026-05-19 20:27:53.737	b5f03ff2-b094-4566-9546-90718f114315
796	/shop/article	2026-05-19 22:26:41.67	90c0c257-e8d8-4a13-bdd7-ed5f518e8bdb
797	/shop/home	2026-05-19 22:26:41.73	90c0c257-e8d8-4a13-bdd7-ed5f518e8bdb
798	/shop/shop-non	2026-05-19 22:26:41.759	90c0c257-e8d8-4a13-bdd7-ed5f518e8bdb
799	/shop/contact	2026-05-19 22:26:41.781	90c0c257-e8d8-4a13-bdd7-ed5f518e8bdb
800	/shop/login	2026-05-19 22:26:41.8	90c0c257-e8d8-4a13-bdd7-ed5f518e8bdb
801	/shop/None	2026-05-20 03:30:15.278	3336644c-513a-4581-80be-a67415f6a217
802	/shop/home	2026-05-20 03:30:15.304	3336644c-513a-4581-80be-a67415f6a217
803	/shop/contact	2026-05-20 03:30:15.481	3336644c-513a-4581-80be-a67415f6a217
804	/shop/cart	2026-05-20 03:30:16.198	3336644c-513a-4581-80be-a67415f6a217
805	/shop/contact	2026-05-20 03:30:16.212	3336644c-513a-4581-80be-a67415f6a217
806	/shop/login	2026-05-20 03:30:16.25	3336644c-513a-4581-80be-a67415f6a217
807	/shop/article	2026-05-20 03:30:16.225	3336644c-513a-4581-80be-a67415f6a217
808	/shop/shop-non	2026-05-20 03:30:16.243	3336644c-513a-4581-80be-a67415f6a217
809	/shop/cart	2026-05-20 03:30:16.263	3336644c-513a-4581-80be-a67415f6a217
810	/shop/cart	2026-05-20 03:30:16.303	3336644c-513a-4581-80be-a67415f6a217
811	/shop/cart	2026-05-20 03:30:16.389	3336644c-513a-4581-80be-a67415f6a217
812	/shop/contact	2026-05-20 03:30:16.401	3336644c-513a-4581-80be-a67415f6a217
813	/shop/cart	2026-05-20 03:30:16.561	3336644c-513a-4581-80be-a67415f6a217
814	/shop/cart	2026-05-20 03:32:07.299	3336644c-513a-4581-80be-a67415f6a217
815	/shop/contact	2026-05-20 03:32:08.119	3336644c-513a-4581-80be-a67415f6a217
816	/shop/home	2026-05-20 05:50:31.634	c157aa96-8301-46d2-a22e-94b97eed90e0
817	/shop/home	2026-05-20 06:38:57.302	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
818	/shop/None	2026-05-20 06:38:57.526	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
819	/shop/cart	2026-05-20 06:38:58.15	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
820	/shop/shop-non	2026-05-20 06:38:58.488	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
821	/shop/cart	2026-05-20 06:38:58.526	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
822	/shop/cart	2026-05-20 06:38:58.066	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
823	/shop/shop-non	2026-05-20 06:38:58.318	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
824	/shop/cart	2026-05-20 06:38:58.556	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
825	/shop/cart	2026-05-20 06:38:58.569	b114d8f4-ede9-40ea-aa8a-2d85e513a9d1
826	/shop/shop-non	2026-05-20 06:55:27.023	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
827	/shop/cart	2026-05-20 06:55:27.741	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
828	/shop/shop-non	2026-05-20 06:55:27.688	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
829	/shop/home	2026-05-20 06:55:28.034	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
830	/shop/None	2026-05-20 06:55:28.04	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
831	/shop/cart	2026-05-20 06:55:28.148	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
832	/shop/cart	2026-05-20 06:55:28.287	7ecb2755-f141-49c6-9bdb-88e1b07eebe1
833	/shop/home	2026-05-20 06:59:05.918	432d3cad-7c81-483f-87bf-d42e22cd11f0
834	/shop/shop-non	2026-05-20 06:59:06.476	432d3cad-7c81-483f-87bf-d42e22cd11f0
835	/shop/None	2026-05-20 06:59:06.448	432d3cad-7c81-483f-87bf-d42e22cd11f0
836	/shop/cart	2026-05-20 06:59:06.503	432d3cad-7c81-483f-87bf-d42e22cd11f0
837	/shop/cart	2026-05-20 06:59:06.545	432d3cad-7c81-483f-87bf-d42e22cd11f0
838	/shop/cart	2026-05-20 06:59:06.979	432d3cad-7c81-483f-87bf-d42e22cd11f0
839	/shop/shop-non	2026-05-20 06:59:15.822	432d3cad-7c81-483f-87bf-d42e22cd11f0
840	/shop/cart	2026-05-20 06:59:15.841	432d3cad-7c81-483f-87bf-d42e22cd11f0
841	/shop/shop-non/4	2026-05-20 06:59:17.337	432d3cad-7c81-483f-87bf-d42e22cd11f0
842	/shop/shop-non/3	2026-05-20 06:59:17.342	432d3cad-7c81-483f-87bf-d42e22cd11f0
843	/shop/shop-non/2	2026-05-20 06:59:17.81	432d3cad-7c81-483f-87bf-d42e22cd11f0
844	/shop/shop-non	2026-05-20 06:59:17.314	432d3cad-7c81-483f-87bf-d42e22cd11f0
845	/shop/shop-non/1	2026-05-20 06:59:17.346	432d3cad-7c81-483f-87bf-d42e22cd11f0
846	/shop/cart	2026-05-20 06:59:17.375	432d3cad-7c81-483f-87bf-d42e22cd11f0
847	/shop/shop-non/1	2026-05-20 06:59:17.792	432d3cad-7c81-483f-87bf-d42e22cd11f0
848	/shop/shop-non/2	2026-05-20 06:59:18.023	432d3cad-7c81-483f-87bf-d42e22cd11f0
849	/shop/shop-non/5	2026-05-20 06:59:17.985	432d3cad-7c81-483f-87bf-d42e22cd11f0
850	/shop/home	2026-05-20 06:59:23.918	f53871ce-0fce-4e45-a10f-867d9c7791d5
851	/shop/shop-non/1	2026-05-20 07:12:34.63	90384d96-1005-44ac-b5a4-84e19b39f346
852	/shop/shop-non	2026-05-20 07:12:35.561	90384d96-1005-44ac-b5a4-84e19b39f346
853	/shop/shop-non/3	2026-05-20 07:12:35.769	90384d96-1005-44ac-b5a4-84e19b39f346
854	/shop/shop-non/4	2026-05-20 07:12:36.524	90384d96-1005-44ac-b5a4-84e19b39f346
855	/shop/shop-non/5	2026-05-20 07:12:36.016	90384d96-1005-44ac-b5a4-84e19b39f346
856	/shop/cart	2026-05-20 07:12:37.017	90384d96-1005-44ac-b5a4-84e19b39f346
857	/shop/shop-non/2	2026-05-20 07:12:36.504	90384d96-1005-44ac-b5a4-84e19b39f346
858	/shop/shop-non/5	2026-05-20 07:12:38.068	90384d96-1005-44ac-b5a4-84e19b39f346
859	/shop/shop-non/1	2026-05-20 07:12:38.653	90384d96-1005-44ac-b5a4-84e19b39f346
860	/shop/shop-non/3	2026-05-20 07:12:39.109	90384d96-1005-44ac-b5a4-84e19b39f346
861	/shop/shop-non/4	2026-05-20 07:12:39.582	90384d96-1005-44ac-b5a4-84e19b39f346
862	/shop/shop-non/2	2026-05-20 07:12:40.113	90384d96-1005-44ac-b5a4-84e19b39f346
863	/shop/cart	2026-05-20 07:12:40.641	90384d96-1005-44ac-b5a4-84e19b39f346
864	/shop/cart	2026-05-20 07:12:41.166	90384d96-1005-44ac-b5a4-84e19b39f346
865	/shop/cart	2026-05-20 07:12:41.667	90384d96-1005-44ac-b5a4-84e19b39f346
866	/shop/cart	2026-05-20 07:12:42.197	90384d96-1005-44ac-b5a4-84e19b39f346
867	/shop/cart	2026-05-20 07:12:42.706	90384d96-1005-44ac-b5a4-84e19b39f346
868	/shop/shop-non	2026-05-20 07:12:43.269	90384d96-1005-44ac-b5a4-84e19b39f346
869	/shop/home	2026-05-20 07:19:02.972	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
870	/shop/shop-non	2026-05-20 07:19:02.985	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
871	/shop/None	2026-05-20 07:19:03.413	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
872	/shop/cart	2026-05-20 07:19:03.432	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
873	/shop/cart	2026-05-20 07:19:03.463	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
874	/shop/cart	2026-05-20 07:19:04.104	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
875	/shop/cart	2026-05-20 07:19:04.135	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
876	/shop/cart	2026-05-20 07:19:04.29	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
877	/shop/shop-non	2026-05-20 07:19:18.924	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
878	/shop/cart	2026-05-20 07:19:18.913	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
879	/shop/shop-non	2026-05-20 07:19:18.956	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
880	/shop/shop-non/1	2026-05-20 07:19:20.686	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
881	/shop/shop-non/5	2026-05-20 07:19:20.702	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
882	/shop/shop-non/3	2026-05-20 07:19:20.721	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
883	/shop/shop-non/2	2026-05-20 07:19:21.426	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
884	/shop/shop-non/1	2026-05-20 07:19:21.435	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
885	/shop/shop-non/3	2026-05-20 07:19:34.331	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
886	/shop/shop-non/2	2026-05-20 07:19:40.208	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
887	/shop/article	2026-05-20 07:19:40.229	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
889	/shop/contact	2026-05-20 07:19:40.222	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
890	/shop/login	2026-05-20 07:19:40.964	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
891	/shop/shop-non/4	2026-05-20 07:19:40.981	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
892	/shop/contact	2026-05-20 07:19:40.987	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
893	/shop/shop-non/5	2026-05-20 07:19:41.247	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
894	/shop/contact	2026-05-20 07:19:43.862	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
895	/shop/shop-non	2026-05-20 07:19:43.87	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
896	/shop/None	2026-05-20 07:23:46.914	f4344175-69d8-43ec-9f37-71d5b08880d6
897	/shop/shop-non	2026-05-20 07:23:46.937	f4344175-69d8-43ec-9f37-71d5b08880d6
898	/shop/home	2026-05-20 07:23:46.906	f4344175-69d8-43ec-9f37-71d5b08880d6
899	/shop/cart	2026-05-20 07:23:46.986	f4344175-69d8-43ec-9f37-71d5b08880d6
900	/shop/cart	2026-05-20 07:23:46.988	f4344175-69d8-43ec-9f37-71d5b08880d6
901	/shop/cart	2026-05-20 07:23:47.019	f4344175-69d8-43ec-9f37-71d5b08880d6
902	/shop/cart	2026-05-20 07:23:47.059	f4344175-69d8-43ec-9f37-71d5b08880d6
903	/shop/cart	2026-05-20 07:23:47.181	f4344175-69d8-43ec-9f37-71d5b08880d6
904	/shop/shop-non	2026-05-20 07:23:55.698	f4344175-69d8-43ec-9f37-71d5b08880d6
905	/shop/shop-non	2026-05-20 07:23:55.718	f4344175-69d8-43ec-9f37-71d5b08880d6
920	/shop/cart	2026-05-20 07:24:05.233	f4344175-69d8-43ec-9f37-71d5b08880d6
921	/shop/shop-non/3	2026-05-20 07:24:05.271	f4344175-69d8-43ec-9f37-71d5b08880d6
922	/shop/shop-non/4	2026-05-20 07:24:05.405	f4344175-69d8-43ec-9f37-71d5b08880d6
923	/shop/shop-non/5	2026-05-20 07:24:05.467	f4344175-69d8-43ec-9f37-71d5b08880d6
924	/shop/shop-non/4	2026-05-20 07:24:04.98	f4344175-69d8-43ec-9f37-71d5b08880d6
925	/shop/shop-non/3	2026-05-20 07:24:04.956	f4344175-69d8-43ec-9f37-71d5b08880d6
926	/shop/cart	2026-05-20 07:24:05.594	f4344175-69d8-43ec-9f37-71d5b08880d6
927	/shop/cart	2026-05-20 07:24:05.621	f4344175-69d8-43ec-9f37-71d5b08880d6
928	/shop/shop-non/4	2026-05-20 07:24:05.193	f4344175-69d8-43ec-9f37-71d5b08880d6
929	/shop/shop-non/1	2026-05-20 07:24:05.457	f4344175-69d8-43ec-9f37-71d5b08880d6
930	/shop/cart	2026-05-20 07:24:05.585	f4344175-69d8-43ec-9f37-71d5b08880d6
931	/shop/cart	2026-05-20 07:24:05.61	f4344175-69d8-43ec-9f37-71d5b08880d6
932	/shop/home	2026-05-20 07:28:59.667	3eaba7bd-5b14-459d-8eb4-b02732883a67
933	/shop/None	2026-05-20 07:30:03.905	144292ab-6b12-401a-b750-9e3d594e0eb5
934	/shop/home	2026-05-20 07:30:03.922	144292ab-6b12-401a-b750-9e3d594e0eb5
935	/shop/cart	2026-05-20 07:30:04.013	144292ab-6b12-401a-b750-9e3d594e0eb5
936	/shop/cart	2026-05-20 07:30:04.007	144292ab-6b12-401a-b750-9e3d594e0eb5
937	/shop/cart	2026-05-20 07:30:04.048	144292ab-6b12-401a-b750-9e3d594e0eb5
938	/shop/cart	2026-05-20 07:30:04.086	144292ab-6b12-401a-b750-9e3d594e0eb5
939	/shop/cart	2026-05-20 07:30:04.148	144292ab-6b12-401a-b750-9e3d594e0eb5
940	/shop/shop-non	2026-05-20 07:30:04.825	144292ab-6b12-401a-b750-9e3d594e0eb5
941	/shop/shop-non	2026-05-20 07:30:07.317	144292ab-6b12-401a-b750-9e3d594e0eb5
942	/shop/shop-non	2026-05-20 07:30:07.392	144292ab-6b12-401a-b750-9e3d594e0eb5
943	/shop/shop-non/1	2026-05-20 07:30:08.694	144292ab-6b12-401a-b750-9e3d594e0eb5
944	/shop/shop-non/4	2026-05-20 07:30:08.748	144292ab-6b12-401a-b750-9e3d594e0eb5
945	/shop/shop-non/5	2026-05-20 07:30:08.996	144292ab-6b12-401a-b750-9e3d594e0eb5
946	/shop/shop-non/2	2026-05-20 07:30:09.01	144292ab-6b12-401a-b750-9e3d594e0eb5
947	/shop/shop-non/1	2026-05-20 07:30:09.044	144292ab-6b12-401a-b750-9e3d594e0eb5
948	/shop/shop-non/5	2026-05-20 07:30:09.41	144292ab-6b12-401a-b750-9e3d594e0eb5
949	/shop/shop-non/3	2026-05-20 07:30:09.423	144292ab-6b12-401a-b750-9e3d594e0eb5
950	/shop/shop-non/4	2026-05-20 07:30:09.483	144292ab-6b12-401a-b750-9e3d594e0eb5
951	/shop/home	2026-05-20 07:30:27.928	144292ab-6b12-401a-b750-9e3d594e0eb5
952	/shop/None	2026-05-20 07:30:28.014	144292ab-6b12-401a-b750-9e3d594e0eb5
953	/shop/shop-non/3	2026-05-20 07:30:28.036	144292ab-6b12-401a-b750-9e3d594e0eb5
954	/shop/cart	2026-05-20 07:30:28.113	144292ab-6b12-401a-b750-9e3d594e0eb5
955	/shop/shop-non	2026-05-20 07:30:28.111	144292ab-6b12-401a-b750-9e3d594e0eb5
956	/shop/cart	2026-05-20 07:30:28.153	144292ab-6b12-401a-b750-9e3d594e0eb5
957	/shop/shop-non	2026-05-20 07:30:28.28	144292ab-6b12-401a-b750-9e3d594e0eb5
958	/shop/shop-non/2	2026-05-20 07:30:28.352	144292ab-6b12-401a-b750-9e3d594e0eb5
959	/shop/shop-non	2026-05-20 07:30:31.261	144292ab-6b12-401a-b750-9e3d594e0eb5
888	/shop/shop-non/4	2026-05-20 07:19:40.205	f7dabf8e-a709-47ba-9be1-c20cbdedc8dd
906	/shop/shop-non	2026-05-20 07:23:56.721	f4344175-69d8-43ec-9f37-71d5b08880d6
907	/shop/shop-non/5	2026-05-20 07:23:57.292	f4344175-69d8-43ec-9f37-71d5b08880d6
908	/shop/shop-non/4	2026-05-20 07:23:57.307	f4344175-69d8-43ec-9f37-71d5b08880d6
909	/shop/shop-non/5	2026-05-20 07:23:57.718	f4344175-69d8-43ec-9f37-71d5b08880d6
910	/shop/shop-non/1	2026-05-20 07:23:57.741	f4344175-69d8-43ec-9f37-71d5b08880d6
911	/shop/shop-non/3	2026-05-20 07:23:57.93	f4344175-69d8-43ec-9f37-71d5b08880d6
912	/shop/shop-non/1	2026-05-20 07:23:57.954	f4344175-69d8-43ec-9f37-71d5b08880d6
913	/shop/shop-non/2	2026-05-20 07:23:57.738	f4344175-69d8-43ec-9f37-71d5b08880d6
914	/shop/shop-non/3	2026-05-20 07:23:57.944	f4344175-69d8-43ec-9f37-71d5b08880d6
915	/shop/shop-non/2	2026-05-20 07:24:03.308	f4344175-69d8-43ec-9f37-71d5b08880d6
916	/shop/shop-non	2026-05-20 07:24:03.317	f4344175-69d8-43ec-9f37-71d5b08880d6
917	/shop/shop-non/1	2026-05-20 07:24:04.944	f4344175-69d8-43ec-9f37-71d5b08880d6
918	/shop/shop-non/5	2026-05-20 07:24:04.979	f4344175-69d8-43ec-9f37-71d5b08880d6
919	/shop/shop-non/2	2026-05-20 07:24:05.231	f4344175-69d8-43ec-9f37-71d5b08880d6
960	/shop/cart	2026-05-20 07:30:31.255	144292ab-6b12-401a-b750-9e3d594e0eb5
961	/shop/shop-non	2026-05-20 07:30:31.728	144292ab-6b12-401a-b750-9e3d594e0eb5
962	/shop/cart	2026-05-20 07:30:32.495	144292ab-6b12-401a-b750-9e3d594e0eb5
963	/shop/shop-non/3	2026-05-20 07:30:32.508	144292ab-6b12-401a-b750-9e3d594e0eb5
964	/shop/shop-non/1	2026-05-20 07:30:32.523	144292ab-6b12-401a-b750-9e3d594e0eb5
965	/shop/cart	2026-05-20 07:30:32.552	144292ab-6b12-401a-b750-9e3d594e0eb5
966	/shop/shop-non/4	2026-05-20 07:30:32.569	144292ab-6b12-401a-b750-9e3d594e0eb5
967	/shop/shop-non/2	2026-05-20 07:30:32.779	144292ab-6b12-401a-b750-9e3d594e0eb5
968	/shop/shop-non/1	2026-05-20 07:30:32.786	144292ab-6b12-401a-b750-9e3d594e0eb5
969	/shop/shop-non/3	2026-05-20 07:30:32.807	144292ab-6b12-401a-b750-9e3d594e0eb5
970	/shop/shop-non/4	2026-05-20 07:30:33.041	144292ab-6b12-401a-b750-9e3d594e0eb5
971	/shop/shop-non/2	2026-05-20 07:30:33.046	144292ab-6b12-401a-b750-9e3d594e0eb5
972	/shop/shop-non/5	2026-05-20 07:30:32.766	144292ab-6b12-401a-b750-9e3d594e0eb5
973	/shop/shop-non/5	2026-05-20 07:30:33.324	144292ab-6b12-401a-b750-9e3d594e0eb5
974	/shop/home	2026-05-20 07:50:24.93	139540b1-3213-4cc0-a1ec-30d72618fd2d
975	/shop/cart	2026-05-20 07:50:25.019	139540b1-3213-4cc0-a1ec-30d72618fd2d
976	/shop/cart	2026-05-20 07:50:25.066	139540b1-3213-4cc0-a1ec-30d72618fd2d
977	/shop/cart	2026-05-20 07:50:25.993	139540b1-3213-4cc0-a1ec-30d72618fd2d
978	/shop/shop-non	2026-05-20 07:50:26.018	139540b1-3213-4cc0-a1ec-30d72618fd2d
979	/shop/None	2026-05-20 07:50:26.095	139540b1-3213-4cc0-a1ec-30d72618fd2d
980	/shop/cart	2026-05-20 07:50:39.231	139540b1-3213-4cc0-a1ec-30d72618fd2d
981	/shop/shop-non	2026-05-20 07:50:39.287	139540b1-3213-4cc0-a1ec-30d72618fd2d
982	/shop/home	2026-05-20 07:50:39.367	139540b1-3213-4cc0-a1ec-30d72618fd2d
983	/shop/cart	2026-05-20 07:50:39.382	139540b1-3213-4cc0-a1ec-30d72618fd2d
984	/shop/shop-non	2026-05-20 07:50:39.426	139540b1-3213-4cc0-a1ec-30d72618fd2d
985	/shop/cart	2026-05-20 07:50:39.419	139540b1-3213-4cc0-a1ec-30d72618fd2d
986	/shop/cart	2026-05-20 07:50:39.447	139540b1-3213-4cc0-a1ec-30d72618fd2d
987	/shop/cart	2026-05-20 07:50:39.473	139540b1-3213-4cc0-a1ec-30d72618fd2d
988	/shop/None	2026-05-20 07:50:39.523	139540b1-3213-4cc0-a1ec-30d72618fd2d
989	/shop/None	2026-05-20 07:53:08.948	bb99bd63-4ced-4b70-a085-ff44723669d6
990	/shop/home	2026-05-20 07:53:08.966	bb99bd63-4ced-4b70-a085-ff44723669d6
991	/shop/cart	2026-05-20 07:53:08.969	bb99bd63-4ced-4b70-a085-ff44723669d6
992	/shop/shop-non	2026-05-20 07:53:10.767	bb99bd63-4ced-4b70-a085-ff44723669d6
993	/shop/cart	2026-05-20 07:53:10.769	bb99bd63-4ced-4b70-a085-ff44723669d6
994	/shop/cart	2026-05-20 07:53:10.785	bb99bd63-4ced-4b70-a085-ff44723669d6
995	/shop/cart	2026-05-20 07:53:10.812	bb99bd63-4ced-4b70-a085-ff44723669d6
996	/shop/shop-non	2026-05-20 08:22:27.021	139540b1-3213-4cc0-a1ec-30d72618fd2d
997	/shop/home	2026-05-20 08:22:27.217	857ff309-eb07-4403-88a2-bf143cf4781f
998	/shop/None	2026-05-20 08:22:27.259	857ff309-eb07-4403-88a2-bf143cf4781f
999	/shop/cart	2026-05-20 08:22:27.293	857ff309-eb07-4403-88a2-bf143cf4781f
1000	/shop/login	2026-05-20 08:22:27.274	857ff309-eb07-4403-88a2-bf143cf4781f
1001	/shop/article	2026-05-20 08:22:27.344	857ff309-eb07-4403-88a2-bf143cf4781f
1002	/shop/cart	2026-05-20 08:22:27.401	857ff309-eb07-4403-88a2-bf143cf4781f
1003	/shop/cart	2026-05-20 08:22:28.078	857ff309-eb07-4403-88a2-bf143cf4781f
1004	/shop/cart	2026-05-20 08:22:28.099	857ff309-eb07-4403-88a2-bf143cf4781f
1005	/shop/cart	2026-05-20 08:22:27.506	857ff309-eb07-4403-88a2-bf143cf4781f
1006	/shop/contact	2026-05-20 08:22:28.452	857ff309-eb07-4403-88a2-bf143cf4781f
1007	/shop/shop-non	2026-05-20 08:22:28.26	857ff309-eb07-4403-88a2-bf143cf4781f
1008	/shop/contact	2026-05-20 08:22:28.298	857ff309-eb07-4403-88a2-bf143cf4781f
1009	/shop/cart	2026-05-20 08:22:28.41	857ff309-eb07-4403-88a2-bf143cf4781f
1010	/shop/shop-non	2026-05-20 08:22:28.449	857ff309-eb07-4403-88a2-bf143cf4781f
1011	/shop/login	2026-05-20 08:22:30.253	857ff309-eb07-4403-88a2-bf143cf4781f
1012	/shop/shop-non	2026-05-20 08:22:30.261	857ff309-eb07-4403-88a2-bf143cf4781f
1013	/shop/shop-non/5	2026-05-20 08:22:30.288	857ff309-eb07-4403-88a2-bf143cf4781f
1014	/shop/article	2026-05-20 08:22:30.316	857ff309-eb07-4403-88a2-bf143cf4781f
1015	/shop/shop-non/4	2026-05-20 08:22:30.317	857ff309-eb07-4403-88a2-bf143cf4781f
1016	/shop/contact	2026-05-20 08:22:30.333	857ff309-eb07-4403-88a2-bf143cf4781f
1017	/shop/shop-non/4	2026-05-20 08:22:30.659	857ff309-eb07-4403-88a2-bf143cf4781f
1018	/shop/shop-non/2	2026-05-20 08:22:30.706	857ff309-eb07-4403-88a2-bf143cf4781f
1019	/shop/contact	2026-05-20 08:22:30.285	857ff309-eb07-4403-88a2-bf143cf4781f
1020	/shop/shop-non/3	2026-05-20 08:22:30.347	857ff309-eb07-4403-88a2-bf143cf4781f
1021	/shop/shop-non/1	2026-05-20 08:22:30.687	857ff309-eb07-4403-88a2-bf143cf4781f
1022	/shop/shop-non/3	2026-05-20 08:22:30.747	857ff309-eb07-4403-88a2-bf143cf4781f
1023	/shop/shop-non/2	2026-05-20 08:22:30.876	857ff309-eb07-4403-88a2-bf143cf4781f
1025	/shop/login	2026-05-20 08:22:39.291	857ff309-eb07-4403-88a2-bf143cf4781f
1024	/shop/article	2026-05-20 08:22:39.279	857ff309-eb07-4403-88a2-bf143cf4781f
1026	/shop/shop-non/5	2026-05-20 08:22:41.175	857ff309-eb07-4403-88a2-bf143cf4781f
1027	/shop/cart	2026-05-20 08:22:41.224	857ff309-eb07-4403-88a2-bf143cf4781f
1028	/shop/shop-non	2026-05-20 08:22:43.891	857ff309-eb07-4403-88a2-bf143cf4781f
1029	/shop/article	2026-05-20 08:22:44.564	857ff309-eb07-4403-88a2-bf143cf4781f
1030	/shop/login	2026-05-20 08:22:44.716	857ff309-eb07-4403-88a2-bf143cf4781f
1031	/shop/None	2026-05-20 08:26:47.976	c42a228c-95a7-41e3-bc70-17a53996413d
1032	/shop/home	2026-05-20 08:26:47.983	c42a228c-95a7-41e3-bc70-17a53996413d
1033	/shop/shop-non	2026-05-20 08:26:48.013	c42a228c-95a7-41e3-bc70-17a53996413d
1034	/shop/cart	2026-05-20 08:26:48.271	c42a228c-95a7-41e3-bc70-17a53996413d
1035	/shop/cart	2026-05-20 08:26:48.321	c42a228c-95a7-41e3-bc70-17a53996413d
1036	/shop/shop-non	2026-05-20 08:26:48.325	c42a228c-95a7-41e3-bc70-17a53996413d
1037	/shop/cart	2026-05-20 08:26:48.379	c42a228c-95a7-41e3-bc70-17a53996413d
1038	/shop/cart	2026-05-20 08:26:48.573	c42a228c-95a7-41e3-bc70-17a53996413d
1039	/shop/login	2026-05-20 08:26:59.343	c42a228c-95a7-41e3-bc70-17a53996413d
1040	/shop/cart	2026-05-20 08:26:59.342	c42a228c-95a7-41e3-bc70-17a53996413d
1041	/shop/contact	2026-05-20 08:26:59.872	c42a228c-95a7-41e3-bc70-17a53996413d
1042	/shop/cart	2026-05-20 08:27:10.448	c42a228c-95a7-41e3-bc70-17a53996413d
1043	/shop/contact	2026-05-20 08:27:10.468	c42a228c-95a7-41e3-bc70-17a53996413d
1044	/shop/contact	2026-05-20 08:27:10.453	c42a228c-95a7-41e3-bc70-17a53996413d
1045	/shop/contact	2026-05-20 08:27:10.464	c42a228c-95a7-41e3-bc70-17a53996413d
1046	/shop/article	2026-05-20 08:27:10.491	c42a228c-95a7-41e3-bc70-17a53996413d
1047	/shop/article	2026-05-20 08:27:13.369	c42a228c-95a7-41e3-bc70-17a53996413d
1048	/shop/article	2026-05-20 08:27:13.531	c42a228c-95a7-41e3-bc70-17a53996413d
1049	/shop/article	2026-05-20 08:27:13.397	c42a228c-95a7-41e3-bc70-17a53996413d
1050	/shop/article	2026-05-20 08:27:19.153	c42a228c-95a7-41e3-bc70-17a53996413d
1051	/shop/None	2026-05-20 08:34:23.13	cd61a031-1118-41df-82e2-d74941a38fe4
1052	/shop/cart	2026-05-20 08:34:23.389	cd61a031-1118-41df-82e2-d74941a38fe4
1053	/shop/cart	2026-05-20 08:34:23.407	cd61a031-1118-41df-82e2-d74941a38fe4
1054	/shop/cart	2026-05-20 08:34:23.457	cd61a031-1118-41df-82e2-d74941a38fe4
1055	/shop/shop-non	2026-05-20 08:34:23.983	cd61a031-1118-41df-82e2-d74941a38fe4
1056	/shop/home	2026-05-20 08:34:24.084	cd61a031-1118-41df-82e2-d74941a38fe4
\.


--
-- Data for Name: payment_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment_item (id, payment_id, product_id, product_type, product_name, display_name, image_path, price, quantity) FROM stdin;
7	9	4	non	lm_muscat	マスカット	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.jpg	2200	1
8	10	4	non	lm_muscat	マスカット	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.jpg	2200	9
9	11	3	non	lm_mango	マンゴー	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Mango/S__96903174_0.jpg	2200	3
10	12	2	non	lm_blueberry	ブルーベリー	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/S__96903171_0.jpg	2200	1
11	13	4	non	lm_muscat	マスカット	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.jpg	2200	1
12	14	2	non	lm_blueberry	ブルーベリー	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/S__96903171_0.jpg	2200	1
13	15	1	non	lm_grape	グレープ	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Grape/S__96903177_0.jpg	2200	3
14	16	4	non	lm_muscat	マスカット	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.jpg	2200	7
15	17	4	non	lm_muscat	マスカット	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Muscat/Shine%20Muscat.jpg	2200	1
16	18	3	non	lm_mango	マンゴー	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Mango/S__96903174_0.jpg	2200	3
17	19	2	non	lm_blueberry	ブルーベリー	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/S__96903171_0.jpg	2200	1
18	20	2	non	lm_blueberry	ブルーベリー	https://umoqtoxwtyyuqwftdssx.supabase.co/storage/v1/object/public/products/Blueberry/S__96903171_0.jpg	2200	1
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: realtime; Owner: supabase_admin
--

COPY realtime.schema_migrations (version, inserted_at) FROM stdin;
20211116024918	2026-04-21 10:28:04
20211116045059	2026-04-21 10:28:05
20211116050929	2026-04-21 10:28:06
20211116051442	2026-04-21 10:28:06
20211116212300	2026-04-21 10:28:07
20211116213355	2026-04-21 10:28:08
20211116213934	2026-04-21 10:28:08
20211116214523	2026-04-21 10:28:09
20211122062447	2026-04-21 10:28:10
20211124070109	2026-04-21 10:28:11
20211202204204	2026-04-21 10:28:12
20211202204605	2026-04-21 10:28:12
20211210212804	2026-04-21 10:28:14
20211228014915	2026-04-21 10:28:15
20220107221237	2026-04-21 10:28:16
20220228202821	2026-04-21 10:28:17
20220312004840	2026-04-21 10:28:17
20220603231003	2026-04-21 10:28:18
20220603232444	2026-04-21 10:28:19
20220615214548	2026-04-21 10:28:20
20220712093339	2026-04-21 10:28:21
20220908172859	2026-04-21 10:28:21
20220916233421	2026-04-21 10:28:22
20230119133233	2026-04-21 10:28:23
20230128025114	2026-04-21 10:28:24
20230128025212	2026-04-21 10:28:24
20230227211149	2026-04-21 10:28:25
20230228184745	2026-04-21 10:28:26
20230308225145	2026-04-21 10:28:26
20230328144023	2026-04-21 10:28:27
20231018144023	2026-04-21 10:28:28
20231204144023	2026-04-21 10:28:29
20231204144024	2026-04-21 10:28:30
20231204144025	2026-04-21 10:28:30
20240108234812	2026-04-21 10:28:31
20240109165339	2026-04-21 10:28:32
20240227174441	2026-04-21 10:28:33
20240311171622	2026-04-21 10:28:34
20240321100241	2026-04-21 10:28:36
20240401105812	2026-04-21 10:28:38
20240418121054	2026-04-21 10:28:39
20240523004032	2026-04-21 10:28:41
20240618124746	2026-04-21 10:28:42
20240801235015	2026-04-21 10:28:42
20240805133720	2026-04-21 10:28:43
20240827160934	2026-04-21 10:28:44
20240919163303	2026-04-21 10:28:45
20240919163305	2026-04-21 10:28:45
20241019105805	2026-04-21 10:28:46
20241030150047	2026-04-21 10:28:49
20241108114728	2026-04-21 10:28:50
20241121104152	2026-04-21 10:28:50
20241130184212	2026-04-21 10:28:51
20241220035512	2026-04-21 10:28:52
20241220123912	2026-04-21 10:28:53
20241224161212	2026-04-21 10:28:53
20250107150512	2026-04-21 10:28:54
20250110162412	2026-04-21 10:28:55
20250123174212	2026-04-21 10:28:55
20250128220012	2026-04-21 10:28:56
20250506224012	2026-04-21 10:28:57
20250523164012	2026-04-21 10:28:57
20250714121412	2026-04-21 10:28:58
20250905041441	2026-04-21 10:28:59
20251103001201	2026-04-21 10:29:00
20251120212548	2026-04-21 10:29:00
20251120215549	2026-04-21 10:29:01
20260218120000	2026-04-21 10:29:02
20260326120000	2026-04-21 10:29:03
\.


--
-- Data for Name: subscription; Type: TABLE DATA; Schema: realtime; Owner: supabase_admin
--

COPY realtime.subscription (id, subscription_id, entity, filters, claims, created_at, action_filter) FROM stdin;
\.


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.buckets (id, name, owner, created_at, updated_at, public, avif_autodetection, file_size_limit, allowed_mime_types, owner_id, type) FROM stdin;
products	products	\N	2026-04-28 05:02:32.36652+00	2026-04-28 05:02:32.36652+00	t	f	\N	\N	\N	STANDARD
\.


--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.buckets_analytics (name, type, format, created_at, updated_at, id, deleted_at) FROM stdin;
\.


--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.buckets_vectors (id, type, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.migrations (id, name, hash, executed_at) FROM stdin;
0	create-migrations-table	e18db593bcde2aca2a408c4d1100f6abba2195df	2026-04-21 09:33:07.091319
1	initialmigration	6ab16121fbaa08bbd11b712d05f358f9b555d777	2026-04-21 09:33:07.129654
2	storage-schema	f6a1fa2c93cbcd16d4e487b362e45fca157a8dbd	2026-04-21 09:33:07.138346
3	pathtoken-column	2cb1b0004b817b29d5b0a971af16bafeede4b70d	2026-04-21 09:33:07.170327
4	add-migrations-rls	427c5b63fe1c5937495d9c635c263ee7a5905058	2026-04-21 09:33:07.186968
5	add-size-functions	79e081a1455b63666c1294a440f8ad4b1e6a7f84	2026-04-21 09:33:07.195918
6	change-column-name-in-get-size	ded78e2f1b5d7e616117897e6443a925965b30d2	2026-04-21 09:33:07.205759
7	add-rls-to-buckets	e7e7f86adbc51049f341dfe8d30256c1abca17aa	2026-04-21 09:33:07.215739
8	add-public-to-buckets	fd670db39ed65f9d08b01db09d6202503ca2bab3	2026-04-21 09:33:07.22507
9	fix-search-function	af597a1b590c70519b464a4ab3be54490712796b	2026-04-21 09:33:07.234546
10	search-files-search-function	b595f05e92f7e91211af1bbfe9c6a13bb3391e16	2026-04-21 09:33:07.244216
11	add-trigger-to-auto-update-updated_at-column	7425bdb14366d1739fa8a18c83100636d74dcaa2	2026-04-21 09:33:07.253772
12	add-automatic-avif-detection-flag	8e92e1266eb29518b6a4c5313ab8f29dd0d08df9	2026-04-21 09:33:07.26339
13	add-bucket-custom-limits	cce962054138135cd9a8c4bcd531598684b25e7d	2026-04-21 09:33:07.282764
14	use-bytes-for-max-size	941c41b346f9802b411f06f30e972ad4744dad27	2026-04-21 09:33:07.292326
15	add-can-insert-object-function	934146bc38ead475f4ef4b555c524ee5d66799e5	2026-04-21 09:33:07.320692
16	add-version	76debf38d3fd07dcfc747ca49096457d95b1221b	2026-04-21 09:33:07.330034
17	drop-owner-foreign-key	f1cbb288f1b7a4c1eb8c38504b80ae2a0153d101	2026-04-21 09:33:07.342053
18	add_owner_id_column_deprecate_owner	e7a511b379110b08e2f214be852c35414749fe66	2026-04-21 09:33:07.351532
19	alter-default-value-objects-id	02e5e22a78626187e00d173dc45f58fa66a4f043	2026-04-21 09:33:07.362412
20	list-objects-with-delimiter	cd694ae708e51ba82bf012bba00caf4f3b6393b7	2026-04-21 09:33:07.371802
21	s3-multipart-uploads	8c804d4a566c40cd1e4cc5b3725a664a9303657f	2026-04-21 09:33:07.385289
22	s3-multipart-uploads-big-ints	9737dc258d2397953c9953d9b86920b8be0cdb73	2026-04-21 09:33:07.406463
23	optimize-search-function	9d7e604cddc4b56a5422dc68c9313f4a1b6f132c	2026-04-21 09:33:07.421992
24	operation-function	8312e37c2bf9e76bbe841aa5fda889206d2bf8aa	2026-04-21 09:33:07.431332
25	custom-metadata	d974c6057c3db1c1f847afa0e291e6165693b990	2026-04-21 09:33:07.440981
26	objects-prefixes	215cabcb7f78121892a5a2037a09fedf9a1ae322	2026-04-21 09:33:07.450728
27	search-v2	859ba38092ac96eb3964d83bf53ccc0b141663a6	2026-04-21 09:33:07.459819
28	object-bucket-name-sorting	c73a2b5b5d4041e39705814fd3a1b95502d38ce4	2026-04-21 09:33:07.468443
29	create-prefixes	ad2c1207f76703d11a9f9007f821620017a66c21	2026-04-21 09:33:07.47806
30	update-object-levels	2be814ff05c8252fdfdc7cfb4b7f5c7e17f0bed6	2026-04-21 09:33:07.487374
31	objects-level-index	b40367c14c3440ec75f19bbce2d71e914ddd3da0	2026-04-21 09:33:07.499394
32	backward-compatible-index-on-objects	e0c37182b0f7aee3efd823298fb3c76f1042c0f7	2026-04-21 09:33:07.508112
33	backward-compatible-index-on-prefixes	b480e99ed951e0900f033ec4eb34b5bdcb4e3d49	2026-04-21 09:33:07.517021
34	optimize-search-function-v1	ca80a3dc7bfef894df17108785ce29a7fc8ee456	2026-04-21 09:33:07.526872
35	add-insert-trigger-prefixes	458fe0ffd07ec53f5e3ce9df51bfdf4861929ccc	2026-04-21 09:33:07.535903
36	optimise-existing-functions	6ae5fca6af5c55abe95369cd4f93985d1814ca8f	2026-04-21 09:33:07.544835
37	add-bucket-name-length-trigger	3944135b4e3e8b22d6d4cbb568fe3b0b51df15c1	2026-04-21 09:33:07.554037
38	iceberg-catalog-flag-on-buckets	02716b81ceec9705aed84aa1501657095b32e5c5	2026-04-21 09:33:07.56408
39	add-search-v2-sort-support	6706c5f2928846abee18461279799ad12b279b78	2026-04-21 09:33:07.581796
40	fix-prefix-race-conditions-optimized	7ad69982ae2d372b21f48fc4829ae9752c518f6b	2026-04-21 09:33:07.590418
41	add-object-level-update-trigger	07fcf1a22165849b7a029deed059ffcde08d1ae0	2026-04-21 09:33:07.599021
42	rollback-prefix-triggers	771479077764adc09e2ea2043eb627503c034cd4	2026-04-21 09:33:07.60795
43	fix-object-level	84b35d6caca9d937478ad8a797491f38b8c2979f	2026-04-21 09:33:07.616849
44	vector-bucket-type	99c20c0ffd52bb1ff1f32fb992f3b351e3ef8fb3	2026-04-21 09:33:07.627136
45	vector-buckets	049e27196d77a7cb76497a85afae669d8b230953	2026-04-21 09:33:07.636847
46	buckets-objects-grants	fedeb96d60fefd8e02ab3ded9fbde05632f84aed	2026-04-21 09:33:07.654712
47	iceberg-table-metadata	649df56855c24d8b36dd4cc1aeb8251aa9ad42c2	2026-04-21 09:33:07.664268
48	iceberg-catalog-ids	e0e8b460c609b9999ccd0df9ad14294613eed939	2026-04-21 09:33:07.673163
49	buckets-objects-grants-postgres	072b1195d0d5a2f888af6b2302a1938dd94b8b3d	2026-04-21 09:33:07.694334
50	search-v2-optimised	6323ac4f850aa14e7387eb32102869578b5bd478	2026-04-21 09:33:07.704321
51	index-backward-compatible-search	2ee395d433f76e38bcd3856debaf6e0e5b674011	2026-04-21 09:33:07.770557
52	drop-not-used-indexes-and-functions	5cc44c8696749ac11dd0dc37f2a3802075f3a171	2026-04-21 09:33:07.77369
53	drop-index-lower-name	d0cb18777d9e2a98ebe0bc5cc7a42e57ebe41854	2026-04-21 09:33:07.78977
54	drop-index-object-level	6289e048b1472da17c31a7eba1ded625a6457e67	2026-04-21 09:33:07.795011
55	prevent-direct-deletes	262a4798d5e0f2e7c8970232e03ce8be695d5819	2026-04-21 09:33:07.797999
57	s3-multipart-uploads-metadata	f127886e00d1b374fadbc7c6b31e09336aad5287	2026-04-21 09:33:07.817956
58	operation-ergonomics	00ca5d483b3fe0d522133d9002ccc5df98365120	2026-04-21 09:33:07.828558
56	fix-optimized-search-function	b823ed1e418101032fa01374edc9a436e54e3ed4	2026-04-21 09:33:07.807846
59	drop-unused-functions	38456f13e39691c2bbb4b5151d0d1cdbabd4a8c4	2026-05-06 03:27:54.868119
60	optimize-existing-functions-again	db35e1c91a9201e59f4fef8d972c2f277d68b157	2026-05-06 03:27:54.939491
\.


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.objects (id, bucket_id, name, owner, created_at, updated_at, last_accessed_at, metadata, version, owner_id, user_metadata) FROM stdin;
4a7c068f-0986-4163-b446-f0f3099f75be	products	Muscat/Shine Muscat.1.jpg	\N	2026-04-28 05:04:21.69775+00	2026-04-28 05:04:30.323997+00	2026-04-28 05:04:21.69775+00	{"eTag": "\\"ce10394f0d65172bcc79a22079c3600c\\"", "size": 123318, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:04:31.000Z", "contentLength": 123318, "httpStatusCode": 200}	91c14d66-9e12-4fd6-b778-106aab619f95	\N	\N
e64c8daf-8457-4230-a124-f4ba97929262	products	Muscat/Shine Muscat.2.jpg	\N	2026-04-28 05:04:21.711996+00	2026-04-28 05:04:31.014607+00	2026-04-28 05:04:21.711996+00	{"eTag": "\\"4e9c4194af9e0069cfabdb69c428b261\\"", "size": 142593, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:04:31.000Z", "contentLength": 142593, "httpStatusCode": 200}	349a5f79-a733-4d54-81d0-f3536661fe27	\N	\N
2c55fb65-d795-429c-a44e-9f0c378420db	products	Muscat/Shine Muscat.jpg	\N	2026-04-28 05:04:22.663842+00	2026-04-28 05:04:31.544774+00	2026-04-28 05:04:22.663842+00	{"eTag": "\\"0f94c4ec5519fa0df27a3a202b112791\\"", "size": 569466, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:04:32.000Z", "contentLength": 569466, "httpStatusCode": 200}	2102946b-c3a2-424e-9e7e-f58701deb1f6	\N	\N
8c81737d-0663-4b7e-b8d4-209de7f4978c	products	Muscat/Shine-Muscat.3.jpg	\N	2026-04-28 05:04:21.858692+00	2026-04-28 05:04:32.161274+00	2026-04-28 05:04:21.858692+00	{"eTag": "\\"9022d10ef37f37c9bf50e62c84737b11\\"", "size": 157796, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:04:33.000Z", "contentLength": 157796, "httpStatusCode": 200}	66d86c91-9c1f-43b0-a5a6-abf4484d7012	\N	\N
009a7754-f930-41f9-8f88-1c14f6ec9e3f	products	Melon/S__96903173_0.jpg	\N	2026-04-28 05:05:43.558011+00	2026-04-28 05:05:43.558011+00	2026-04-28 05:05:43.558011+00	{"eTag": "\\"6d6dbae2d7f41c021a347558fc8ec906-1\\"", "size": 128561, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:05:42.000Z", "contentLength": 128561, "httpStatusCode": 200}	775c7a65-5f5e-4b4f-9ee7-bba698ab1935	\N	\N
5b46cf5a-9695-47ce-8b05-9746bd0d3596	products	Blueberry/with_box.png	\N	2026-04-28 05:07:52.857354+00	2026-04-28 05:07:52.857354+00	2026-04-28 05:07:52.857354+00	{"eTag": "\\"19841eaa9dd44b24cce99d7c014f5466-1\\"", "size": 26832, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:07:52.000Z", "contentLength": 26832, "httpStatusCode": 200}	6e811da5-37c2-4d6f-966e-4a3ca2748dcc	\N	\N
7675cf85-4283-4b79-b072-65227824c320	products	Blueberry/front.png	\N	2026-04-28 05:07:53.032311+00	2026-04-28 05:07:53.032311+00	2026-04-28 05:07:53.032311+00	{"eTag": "\\"9dcc94c6c440cefa75273d98fcb0f536-1\\"", "size": 12964, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:07:52.000Z", "contentLength": 12964, "httpStatusCode": 200}	31515482-9145-4ac0-b52e-178ba0469f3b	\N	\N
0aba174f-65cb-4cc9-8112-a5f1a0a98188	products	Blueberry/S__96903171_0.jpg	\N	2026-04-28 05:07:53.847283+00	2026-04-28 05:07:53.847283+00	2026-04-28 05:07:53.847283+00	{"eTag": "\\"d6afe45d8b43e78e1d4773852bd2873c-1\\"", "size": 118186, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:07:52.000Z", "contentLength": 118186, "httpStatusCode": 200}	67c374ee-26af-40fb-b22a-64dd8da665f1	\N	\N
42ec7349-ca07-4b4c-9f9d-b8d9c2487755	products	Grape/grape_front.png	\N	2026-04-28 05:08:09.021936+00	2026-04-28 05:08:09.021936+00	2026-04-28 05:08:09.021936+00	{"eTag": "\\"5be05e656ba80dc8134df5656a6b47a1-1\\"", "size": 9732, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:08.000Z", "contentLength": 9732, "httpStatusCode": 200}	e8c4e3e5-8bd4-4863-9c52-335e98dd9fa0	\N	\N
4bd7d6d5-9cd1-4e6c-896a-b71c09c2e469	products	Grape/grape_with_box.png	\N	2026-04-28 05:08:09.057722+00	2026-04-28 05:08:09.057722+00	2026-04-28 05:08:09.057722+00	{"eTag": "\\"85733fc4f471102445e3682d4b9fe112-1\\"", "size": 20916, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:08.000Z", "contentLength": 20916, "httpStatusCode": 200}	038dbcbc-f29b-4a61-9c2b-a306eb175df2	\N	\N
1797b6ef-3fc4-4a36-a97c-7c7a1526e575	products	Grape/S__96903177_0.jpg	\N	2026-04-28 05:08:10.003926+00	2026-04-28 05:08:10.003926+00	2026-04-28 05:08:10.003926+00	{"eTag": "\\"97b587be761275c3f9048b05dea6d737-1\\"", "size": 115943, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:08.000Z", "contentLength": 115943, "httpStatusCode": 200}	82315d73-4412-44c7-a511-08845b719206	\N	\N
c1d22d77-924b-4330-8998-71909cbc7e24	products	Mango/Mango_front.png	\N	2026-04-28 05:08:25.914721+00	2026-04-28 05:08:25.914721+00	2026-04-28 05:08:25.914721+00	{"eTag": "\\"55c69931984be6ef9a2542f57ec86b13-1\\"", "size": 14340, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:25.000Z", "contentLength": 14340, "httpStatusCode": 200}	cb9c3225-ec82-430d-976e-1450728a86a3	\N	\N
2c20e605-ced1-4e43-befe-8f0bcd2cdde6	products	Mango/Mang_with_box.jpg	\N	2026-04-28 05:08:26.315437+00	2026-04-28 05:08:26.315437+00	2026-04-28 05:08:26.315437+00	{"eTag": "\\"1e4c762ba7990b35262b8f2412e5df0a-1\\"", "size": 206794, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:25.000Z", "contentLength": 206794, "httpStatusCode": 200}	7b209552-7349-469e-a93b-c859e762d4fa	\N	\N
da752232-8a3a-4bef-9768-4783e743fd4f	products	Mango/S__96903174_0.jpg	\N	2026-04-28 05:08:26.83743+00	2026-04-28 05:08:26.83743+00	2026-04-28 05:08:26.83743+00	{"eTag": "\\"06e6e16512b7c849e251d3f13dc5533a-1\\"", "size": 103375, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:25.000Z", "contentLength": 103375, "httpStatusCode": 200}	00b1cfde-a807-4c26-bb25-b450c8759f8f	\N	\N
8da7fd14-4735-4e32-bee4-56e2a40dc068	products	Melon/Melon_front.png	\N	2026-04-28 05:08:43.025229+00	2026-04-28 05:08:43.025229+00	2026-04-28 05:08:43.025229+00	{"eTag": "\\"d736f32fce2c8372681a3def065ff7b7-1\\"", "size": 11790, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:43.000Z", "contentLength": 11790, "httpStatusCode": 200}	82ed7960-8ac9-433b-9b0d-818a8298b74c	\N	\N
b3a3d76c-3e2e-49aa-8520-3636d268aec8	products	Melon/Melon_with_box.png	\N	2026-04-28 05:08:43.049693+00	2026-04-28 05:08:43.049693+00	2026-04-28 05:08:43.049693+00	{"eTag": "\\"cd3207ba8d2827b44dec09b438e170be-1\\"", "size": 21736, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2026-04-28T05:08:43.000Z", "contentLength": 21736, "httpStatusCode": 200}	ce6e5669-6080-43d6-938d-20d92e80ac4d	\N	\N
\.


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.s3_multipart_uploads (id, in_progress_size, upload_signature, bucket_id, key, version, owner_id, created_at, user_metadata, metadata) FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.s3_multipart_uploads_parts (id, upload_id, size, part_number, bucket_id, key, etag, owner_id, version, created_at) FROM stdin;
\.


--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.vector_indexes (id, name, bucket_id, data_type, dimension, distance_metric, metadata_configuration, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--

COPY vault.secrets (id, name, description, secret, key_id, nonce, created_at, updated_at) FROM stdin;
\.


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('auth.refresh_tokens_id_seq', 1, false);


--
-- Name: Admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Admin_id_seq"', 1, true);


--
-- Name: Contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Contact_id_seq"', 4, true);


--
-- Name: Coupon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Coupon_id_seq"', 7, true);


--
-- Name: Payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Payment_id_seq"', 20, true);


--
-- Name: Product_Non_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_Non_id_seq"', 5, true);


--
-- Name: RegularCustomer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RegularCustomer_id_seq"', 1, false);


--
-- Name: Shipping_Fee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Shipping_Fee_id_seq"', 1, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, false);


--
-- Name: page_view_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.page_view_id_seq', 1056, true);


--
-- Name: payment_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_item_id_seq', 18, true);


--
-- Name: subscription_id_seq; Type: SEQUENCE SET; Schema: realtime; Owner: supabase_admin
--

SELECT pg_catalog.setval('realtime.subscription_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

\unrestrict ejGzRSCu4kIxsGMEY86fzQAX9EyvgjMEcChax1tsIXbrOukm8fOG60wtcnF5K6Q

