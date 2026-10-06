import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const postPhoto = require("../../assets/images/tabIcons/post.jpg");

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* Page heading */}
      <View style={styles.heading}>
        <Ionicons name="chevron-back" size={28} color="black" />

        <View style={styles.headingText}>
          <Text style={styles.accountName}>INSTAGRAM</Text>
          <Text style={styles.title}>Posts</Text>
        </View>

        <View style={styles.spacer} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Post owner */}
        <View style={styles.userRow}>
          <Image source={postPhoto} style={styles.avatar} />

          <View style={styles.userDetails}>
            <Text style={styles.bold}>rupiiiiiiii567</Text>
            <Text style={styles.smallText}>rup</Text>
          </View>

          <Ionicons name="ellipsis-horizontal" size={22} color="black" />
        </View>

        {/* Main photo */}
        <Image
          source={postPhoto}
          style={styles.postImage}
          resizeMode="contain"
        />

        {/* Post icons */}
        <View style={styles.actions}>
          <Ionicons name="heart-outline" size={28} color="black" />
          <Ionicons name="chatbubble-outline" size={25} color="black" />
          <Ionicons name="paper-plane-outline" size={26} color="black" />

          <View style={styles.flexSpace} />

          <Ionicons name="bookmark-outline" size={26} color="black" />
        </View>

        {/* Likes and comments */}
        <View style={styles.description}>
          <View style={styles.likesRow}>
            <Image source={postPhoto} style={styles.likeAvatar} />

            <Text style={styles.bodyText}>
              Liked by <Text style={styles.bold}>rxndhawa._67</Text>
              {" and "}
              <Text style={styles.bold}>7 others</Text>
            </Text>
          </View>

          <Text style={styles.bodyText}>
            <Text style={styles.bold}>rupiiiiiiii567</Text>
            {" Soft Smile , peaceful soul , and a heart full of love. "}
          </Text>

          <Text style={styles.comments}>View all 12 comments</Text>

          <Text style={styles.bodyText}>
            <Text style={styles.bold}>karam.67</Text>
            {" Awesome tones"}
          </Text>

          <Text style={styles.bodyText}>
            <Text style={styles.bold}>navkaur</Text>
            {" Gorg. Love it! ❤️"}
          </Text>

          <Text style={styles.time}>5 hours ago</Text>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.navigation}>
        <Ionicons name="home-outline" size={27} color="black" />
        <Ionicons name="search-outline" size={27} color="black" />
        <Ionicons name="film-outline" size={27} color="black" />
        <Ionicons name="bag-handle-outline" size={27} color="black" />
        <Ionicons name="person-circle" size={29} color="black" />
      </View>

      {/* Required working button */}
      <View style={styles.alertContainer}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: 600,
    
    
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  headingText: {
    flex: 1,
    alignItems: "center",
  },
  accountName: {
    fontSize: 11,
    color: "#888888",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
  },
  spacer: {
    width: 28,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 9,
  },
  userDetails: {
    flex: 1,
  },
  bold: {
    fontWeight: "700",
    color: "#111111",
  },
  smallText: {
    fontSize: 11,
    color: "#333333",
  },
  postImage: {
    width: "100%",
    height: 700,
  
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  flexSpace: {
    flex: 1,
  },
  description: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 5,
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 3,
  },
  likeAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 19,
    color: "#111111",
    flexShrink: 1,
  },
  comments: {
    fontSize: 13,
    color: "#888888",
    marginVertical: 2,
  },
  time: {
    fontSize: 10,
    color: "#888888",
    marginTop: 3,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    paddingVertical: 12,
  },
  alertContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
});
