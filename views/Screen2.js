import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'
// import RNFetchBlob from 'rn-fetch-blob';

const Screen2 = ({ route }) => {
    const { clickedimage } = route.params
    const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper)
    const [imagedata, setimagedata] = useState()
    useEffect(() => {
        setimagedata(JSON.parse(clickedimage)?.cover_photo.urls.regular)
    }, [])
    // console.log(typeof (imagedata))

    // const checkpermission = async () => { }
    // https://aboutreact.com/download-image-in-react-native/

    const checkPermission = async () => { }

    const shownextimage = async () => {
        // console.log(searchvalue)
        const data = await fetch(`https://source.unsplash.com/900x1600/?${searchvalue}`)

        // console.log(data.url)
        setimagedata(data.url)
        console.log('next image')
    }
    return (
        <View style={styles.imagecontainer}>
            <Image source={{ uri: imagedata }} style={styles.image} />
            {/* <Text>My btn</Text> */}
            <TouchableOpacity style={styles.downloadbtn} onPress={checkPermission}>
                <Text style={styles.downloadbtntxt}>Download</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextbtn} onPress={shownextimage}>
                <Text style={styles.nextbtntxt}>Next</Text>
            </TouchableOpacity>
        </View>


    )
}
const styles = StyleSheet.create({

    imagecontainer: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    },
    image: {
        width: "100%",
        height: "100%",
    },
    downloadbtn: {
        position: "absolute",
        bottom: 10,
        left: 80,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 10,
    },
    downloadbtntxt: {
        color: 'white',
        fontSize: 20,
        // fontWeight: 'bold',
    },
    nextbtn: {
        position: "absolute",
        bottom: 10,
        right: 80,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 10,
    },
    nextbtntxt: {
        color: 'black',
        fontSize: 20,
        // fontWeight: 'bold',
    },
});
export default Screen2