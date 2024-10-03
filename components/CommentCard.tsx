import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function CommentCard() {
    return (
      <View style={styles.comment}>
          <View style={{flexDirection: 'row'}}>
            <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }}
                    style={styles.commentAvatar}
            />
            <View>
              <Text style={styles.commentName}>Darron Levesque</Text>
                  <Text style={styles.commentTime}>3 min ago</Text>
            </View>
          </View>
            
          <View>
              
              <Text style={styles.commentText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...
              </Text>
              {/* Upvote and Reply */}
              <View style={styles.upvoteReplyBar}>
              <TouchableOpacity style={styles.upvoteButton}>
                  <FontAwesome name="arrow-up" size={18} color="black" />
                  <Text style={{marginLeft: 5}}>5 Upvotes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.replyButton}>
                  <FontAwesome name="reply" size={18} color="black" />
                  <Text style={{marginLeft: 5}}>2 Reply</Text>
              </TouchableOpacity>
              </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  comment: {
    marginBottom: 10,
    backgroundColor: '#F3F4F8',
    padding: 10,
    borderRadius: 10
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  commentName: {
    fontWeight: 'bold',
  },
  commentTime: {
    fontSize: 12,
    color: '#666',
  },
  commentText: {
    marginTop: 5,
    marginBottom:10,
    fontSize: 14,
    color: '#333',
  },
  upvoteReplyBar: {
    flexDirection: 'row',
    marginTop: 5,
  },
  upvoteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  replyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})