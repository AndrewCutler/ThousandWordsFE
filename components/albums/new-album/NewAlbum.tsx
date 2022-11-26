import { useMutation } from '@tanstack/react-query';
import React, { ReactElement, useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { createAlbum } from '../../../api/queries';

const NewAlbum = (): ReactElement => {
	const {
		mutate,
		isError,
		error,
		isSuccess
	} =
		useMutation(
			{
				mutationFn: async ({
					userId,
					name
				}: {
					userId: string;
					name: string;
				}) =>
					createAlbum(
						userId,
						name
					)
			}
		);

	const [
		showSnackbar,
		setShowSnackbar
	] =
		useState<boolean>(
			false
		);
	const [
		snackbarContent,
		setSnackbarContent
	] =
		useState<string>(
			''
		);
	const [
		name,
		setName
	] =
		useState<string>(
			''
		);

	const handleSave =
		(): void => {
			mutate(
				{
					name,
					userId: '4a5b113e-73ed-4546-83f8-9a6eb09e62a8'
				}
			);
		};

	useEffect(() => {
		if (
			isSuccess
		) {
			setSnackbarContent(
				'Album created successfully.'
			);
			setShowSnackbar(
				true
			);
		}
	}, [
		isSuccess
	]);

	useEffect(() => {
		if (
			isError
		) {
			setSnackbarContent(
				error
			);
			setShowSnackbar(
				true
			);
		}
	}, [
		error,
		isError
	]);

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
				padding: 20,
				alignItems: 'center'
			}}
		>
			<Text>
				New
				album
			</Text>
			<TextInput
				style={{
					backgroundColor: '#efddef'
				}}
				label='Album name'
				value={
					name
				}
				onChangeText={(
					text
				) =>
					setName(
						text
					)
				}
			/>
			<Button
				disabled={
					name?.length <
					4
				}
				onPress={
					handleSave
				}
			>
				Save
			</Button>
			<Snackbar
				visible={
					showSnackbar
				}
				onDismiss={() =>
					setShowSnackbar(
						false
					)
				}
			>
				{
					snackbarContent
				}
			</Snackbar>
		</View>
	);
};

export default NewAlbum;
